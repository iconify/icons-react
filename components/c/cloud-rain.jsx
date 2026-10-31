import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/u/uqy7wxrly.css';
import '../../css/j/j07vukbew.css';
import '../../css/x/xziqeyoxn.css';
import '../../css/w/wjnm2k6mp.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/q/qmfhm82ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGrmsRfdpY" cx="7.86" cy="4.21" r="20.94" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="uqy7wxrly wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="j07vukbew wm-a"/><path fill="url(#SVGrmsRfdpY)" class="wm-k xziqeyoxn"/><path class="wjnm2k6mp wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="qmfhm82ih wm-deco"/></g>`,
		"fallback": "withicons-rangoli:cloud-rain",
	});
}

export default Component;
