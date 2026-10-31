import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/b/ba10p7_-n.css';
import '../../css/q/qknfe2bzk.css';
import '../../css/w/w7sgi5b4a.css';
import '../../css/c/cyrbi7bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGF5WVw5AU" cx="8.83" cy="10.97" r="18.33" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="ba10p7_-n wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="qknfe2bzk wm-a"/><path fill="url(#SVGF5WVw5AU)" class="w7sgi5b4a wm-k"/><path class="cyrbi7bfc wm-shine"/></g>`,
		"fallback": "withicons-rangoli:avatar-bunny",
	});
}

export default Component;
