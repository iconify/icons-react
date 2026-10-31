import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/x/xfjv1uxgl.css';
import '../../css/p/pa_y33bze.css';
import '../../css/z/zbpdkgzrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGnreWddSd" cx="7.64" cy="7.13" r="24.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow xfjv1uxgl"/><path fill="url(#SVGnreWddSd)" class="pa_y33bze wm-k"/><path class="wm-shine zbpdkgzrp"/></g>`,
		"fallback": "withicons-rangoli:heart-handshake",
	});
}

export default Component;
