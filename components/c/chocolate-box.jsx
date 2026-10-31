import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/m/m0l0mebdy.css';
import '../../css/i/ibpkulbfv.css';
import '../../css/m/m6gxcd7vu.css';
import '../../css/r/rr_o8ux8z.css';
import '../../css/z/zbpdkgzrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGnreWddSd" cx="7.64" cy="7.13" r="24.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="m0l0mebdy wm-shadow"/><path fill="url(#SVGnreWddSd)" class="ibpkulbfv wm-k"/><path class="m6gxcd7vu wm-k"/><path class="rr_o8ux8z wm-k"/><path class="wm-shine zbpdkgzrp"/></g>`,
		"fallback": "withicons-rangoli:chocolate-box",
	});
}

export default Component;
