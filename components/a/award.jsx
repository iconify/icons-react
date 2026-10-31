import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/j/j7ucld9bf.css';
import '../../css/b/b0flgab8j.css';
import '../../css/b/bqs29acio.css';
import '../../css/l/l3dedqkhw.css';
import '../../css/m/m_4u2t0dp.css';
import '../../css/r/r-m95opsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGEQqtsb3z" cx="9.23" cy="5.68" r="15.78" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="j7ucld9bf wm-deco"/><path fill="url(#SVGDCUexbkg)" class="b0flgab8j wm-deco"/><path class="bqs29acio wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="l3dedqkhw wm-a"/><path fill="url(#SVGEQqtsb3z)" class="m_4u2t0dp wm-k"/><path class="r-m95opsi wm-shine"/></g>`,
		"fallback": "withicons-rangoli:award",
	});
}

export default Component;
