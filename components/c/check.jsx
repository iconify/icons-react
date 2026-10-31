import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/l/lb5wxi3bx.css';
import '../../css/l/lk96aabdm.css';
import '../../css/b/b5vgljb1i.css';
import '../../css/f/f9-c6db_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGhrT7C3il" cx="8.22" cy="8.3" r="19.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGhrT7C3il)" class="lb5wxi3bx wm-k"/><path class="lk96aabdm wm-deco"/><path fill="url(#SVGDCUexbkg)" class="b5vgljb1i wm-deco"/><path class="f9-c6db_a wm-deco"/></g>`,
		"fallback": "withicons-rangoli:check",
	});
}

export default Component;
