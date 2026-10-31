import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/c/cf1te_bcj.css';
import '../../css/m/m5gq1mb2b.css';
import '../../css/b/b_5pfv3qg.css';
import '../../css/f/f57f7cekd.css';
import '../../css/i/ijqh7-bud.css';
import '../../css/r/rtpuq03fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGEXHgleut" cx="9.6" cy="6.18" r="22.72" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="cf1te_bcj wm-shadow"/><path fill="url(#SVGEXHgleut)" class="m5gq1mb2b wm-k"/><path class="b_5pfv3qg wm-shine"/><path class="f57f7cekd wm-deco"/><path fill="url(#SVGDCUexbkg)" class="ijqh7-bud wm-deco"/><path class="rtpuq03fz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:ear",
	});
}

export default Component;
