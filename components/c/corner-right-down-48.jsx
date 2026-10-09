import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4zhywu2u.css';
import '../../css/s/sbj00_4pw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4zhywu2u"/><path class="sbj00_4pw"/>`,
		"fallback": "energy-icons:corner-right-down-48",
	});
}

export default Component;
