import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/y/yweuk4b-h.css';
import '../../css/r/rjc0izb6p.css';
import '../../css/l/lixx466un.css';
import '../../css/z/zxxc2accc.css';
import '../../css/b/b7rauc7xa.css';
import '../../css/t/t3-tew12e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG6ac9bcBP" cx="6.72" cy="8.13" r="23.29" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow yweuk4b-h"/><path fill="url(#SVGDCUexbkg)" class="rjc0izb6p wm-a"/><path fill="url(#SVG6ac9bcBP)" class="lixx466un wm-k"/><path class="wm-shine zxxc2accc"/><path class="b7rauc7xa wm-deco"/><path class="t3-tew12e wm-deco"/></g>`,
		"fallback": "withicons-rangoli:chart-donut",
	});
}

export default Component;
