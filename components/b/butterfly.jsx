import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/j/jkrnv30sx.css';
import '../../css/e/ewy5u6bdw.css';
import '../../css/r/ro5jf3z-y.css';
import '../../css/r/raewplb6v.css';
import '../../css/v/vc-w7ccgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGFji9qdNf" cx="7.42" cy="6.67" r="25.05" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="jkrnv30sx wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="ewy5u6bdw wm-a"/><path fill="url(#SVGFji9qdNf)" class="ro5jf3z-y wm-k"/><path fill="url(#SVGDCUexbkg)" class="raewplb6v wm-a"/><path class="vc-w7ccgx wm-shine"/></g>`,
		"fallback": "withicons-rangoli:butterfly",
	});
}

export default Component;
