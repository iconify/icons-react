import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/j/jatwus3ao.css';
import '../../css/p/pps97zrnh.css';
import '../../css/z/zn2jkckio.css';
import '../../css/o/o7pfhdcyw.css';
import '../../css/u/uwmw74b0c.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/v/vhebhwrxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGkmzeyege" cx="7.2" cy="5.86" r="23.71" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="jatwus3ao wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="pps97zrnh wm-a"/><path fill="url(#SVGkmzeyege)" class="wm-k zn2jkckio"/><path class="o7pfhdcyw wm-k"/><path class="uwmw74b0c wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="vhebhwrxs wm-deco"/></g>`,
		"fallback": "withicons-rangoli:airplay",
	});
}

export default Component;
