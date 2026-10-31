import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/l/lds1m0b6k.css';
import '../../css/n/nvl1arpjw.css';
import '../../css/z/z8vi_fbro.css';
import '../../css/g/g7mxo5ssr.css';
import '../../css/w/w6kjzui3o.css';
import '../../css/i/iiabimb6b.css';
import '../../css/i/i2ltic8ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGMgJzrzUj" cx="6.52" cy="7.24" r="22.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="lds1m0b6k wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="nvl1arpjw wm-a"/><path fill="url(#SVGMgJzrzUj)" class="wm-k z8vi_fbro"/><path class="g7mxo5ssr wm-shine"/><path class="w6kjzui3o wm-deco"/><path fill="url(#SVGDCUexbkg)" class="iiabimb6b wm-deco"/><path class="i2ltic8ov wm-deco"/></g>`,
		"fallback": "withicons-rangoli:drill",
	});
}

export default Component;
