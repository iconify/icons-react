import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nh1fu53ps.css';
import '../../css/m/mu2j4ybpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nh1fu53ps"/><path class="mu2j4ybpr"/></g>`,
		"fallback": "iconaut:flask-solid",
	});
}

export default Component;
