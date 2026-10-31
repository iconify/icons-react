import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/m/ma480hmyu.css';
import '../../css/w/w6eysbc1z.css';
import '../../css/n/n4xk4gbiu.css';
import '../../css/p/pgxbljbtx.css';
import '../../css/v/vc7aixd9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGfTZU7cSa" cx="8.52" cy="8.08" r="20.11" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="ma480hmyu wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="w6eysbc1z wm-a"/><path fill="url(#SVGfTZU7cSa)" class="n4xk4gbiu wm-k"/><path class="pgxbljbtx wm-shine"/><path class="vc7aixd9f wm-s"/></g>`,
		"fallback": "withicons-rangoli:alarm-clock-check",
	});
}

export default Component;
