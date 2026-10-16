import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3fak-24z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3fak-24z"/>`,
		"fallback": "energy-icons:crusher-48",
	});
}

export default Component;
