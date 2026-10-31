import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/veh61qbzo.css';
import '../../css/y/y-ew51ezt.css';
import '../../css/y/yy_usab1y.css';
import '../../css/d/dfv-0obfg.css';
import '../../css/f/fbtynccbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="veh61qbzo wm-shadow"/><path class="y-ew51ezt"/><path class="yy_usab1y"/><path class="dfv-0obfg"/><path class="fbtynccbr"/></g>`,
		"fallback": "withicons-retro:credit-card",
	});
}

export default Component;
