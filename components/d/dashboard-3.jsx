import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t398k0bka.css';
import '../../css/y/y2k_1jypb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t398k0bka"/><path class="y2k_1jypb"/></g>`,
		"fallback": "streamline-color:dashboard-3",
	});
}

export default Component;
