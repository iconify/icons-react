import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/x/xyx3-ac6j.css';
import '../../css/l/le8ynjbyz.css';
import '../../css/l/l55y3jmge.css';
import '../../css/z/zutv-19xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGyzM81dsy" cx="7.51" cy="8.69" r="23.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow xyx3-ac6j"/><path fill="url(#SVGDCUexbkg)" class="le8ynjbyz wm-a"/><path fill="url(#SVGyzM81dsy)" class="l55y3jmge wm-k"/><path class="wm-shine zutv-19xc"/></g>`,
		"fallback": "withicons-rangoli:avatar-dog",
	});
}

export default Component;
