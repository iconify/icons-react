import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/q/q6xb6tbxh.css';
import '../../css/v/v4ltgf7og.css';
import '../../css/e/exje49buh.css';
import '../../css/k/kgunf7-1z.css';
import '../../css/r/rggi0s6vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG7J7uebKW" cx="3.64" cy="7.58" r="15.66" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="q6xb6tbxh wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="v4ltgf7og wm-a"/><path fill="url(#SVG7J7uebKW)" class="exje49buh wm-k"/><path class="kgunf7-1z wm-shine"/><path class="rggi0s6vb wm-s"/></g>`,
		"fallback": "withicons-rangoli:flip-horizontal",
	});
}

export default Component;
