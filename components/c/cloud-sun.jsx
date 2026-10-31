import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/h/h5j-bujht.css';
import '../../css/e/engkl5smh.css';
import '../../css/z/zt3-9pbox.css';
import '../../css/l/l0ls1ubbh.css';
import '../../css/r/r0fb8xbcn.css';
import '../../css/x/xkaeprbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGqPydCdrf" cx="11.31" cy="12.61" r="17.24" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="h5j-bujht wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="engkl5smh wm-a"/><path fill="url(#SVGqPydCdrf)" class="wm-k zt3-9pbox"/><path class="l0ls1ubbh wm-shine"/><path class="r0fb8xbcn wm-deco"/><path class="wm-deco xkaeprbcb"/></g>`,
		"fallback": "withicons-rangoli:cloud-sun",
	});
}

export default Component;
