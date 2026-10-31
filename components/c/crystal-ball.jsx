import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/k/ku3b8dayf.css';
import '../../css/w/wel6gfbcj.css';
import '../../css/u/uq_w9vbjd.css';
import '../../css/h/h-ojxqr3w.css';
import '../../css/q/qg9qqr2as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG4GEdYhkz" cx="8.3" cy="5.3" r="21.38" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="ku3b8dayf wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="wel6gfbcj wm-a"/><path fill="url(#SVG4GEdYhkz)" class="uq_w9vbjd wm-k"/><path class="h-ojxqr3w wm-shine"/><path class="qg9qqr2as wm-s"/></g>`,
		"fallback": "withicons-rangoli:crystal-ball",
	});
}

export default Component;
