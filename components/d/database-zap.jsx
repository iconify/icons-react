import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/t/tm8_4cc_q.css';
import '../../css/y/y0czkzblm.css';
import '../../css/n/ngl_vvuda.css';
import '../../css/o/osmrkv0ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGxpzDbenL" cx="8.08" cy="6.18" r="24.64" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="tm8_4cc_q wm-shadow"/><path fill="url(#SVGxpzDbenL)" class="wm-k y0czkzblm"/><path class="ngl_vvuda wm-shine"/><path class="osmrkv0ch wm-s"/></g>`,
		"fallback": "withicons-rangoli:database-zap",
	});
}

export default Component;
