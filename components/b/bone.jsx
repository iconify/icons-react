import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/y/yu0xzf12s.css';
import '../../css/i/iye--ubdi.css';
import '../../css/a/aeq7llbmi.css';
import '../../css/x/xfvpd9bpz.css';
import '../../css/c/cdok_8b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow yu0xzf12s"/><path fill="url(#SVGU00zieBw)" class="iye--ubdi wm-k"/><path class="aeq7llbmi wm-deco"/><path fill="url(#SVGDCUexbkg)" class="wm-deco xfvpd9bpz"/><path class="cdok_8b5u wm-deco"/></g>`,
		"fallback": "withicons-rangoli:bone",
	});
}

export default Component;
