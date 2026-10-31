import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/r/rw6napoyv.css';
import '../../css/w/wsbw1jb_c.css';
import '../../css/g/g6go9obvu.css';
import '../../css/u/u-5q1h23q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGnLIN7cUx" cx="7.82" cy="6.18" r="25.35" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="rw6napoyv wm-shadow"/><path fill="url(#SVGnLIN7cUx)" class="wm-k wsbw1jb_c"/><path class="g6go9obvu wm-k"/><path class="u-5q1h23q wm-shine"/></g>`,
		"fallback": "withicons-rangoli:avatar-penguin",
	});
}

export default Component;
