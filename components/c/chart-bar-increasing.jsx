import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/d/dh93z5q8m.css';
import '../../css/h/hw8e09bdp.css';
import '../../css/k/kaqf--bos.css';
import '../../css/q/qu7f6q5is.css';
import '../../css/m/mx66r9q5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGiYNTqbdn" cx="10.97" cy="6.25" r="18.59" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="dh93z5q8m wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="hw8e09bdp wm-a"/><path fill="url(#SVGiYNTqbdn)" class="kaqf--bos wm-k"/><path class="qu7f6q5is wm-shine"/><path class="mx66r9q5s wm-deco"/></g>`,
		"fallback": "withicons-rangoli:chart-bar-increasing",
	});
}

export default Component;
