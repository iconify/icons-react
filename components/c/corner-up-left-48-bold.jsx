import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbyd0vbew.css';
import '../../css/b/bhk7a-jqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbyd0vbew"/><path class="bhk7a-jqs"/>`,
		"fallback": "energy-icons:corner-up-left-48-bold",
	});
}

export default Component;
