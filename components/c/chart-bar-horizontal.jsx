import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/a/aosgag5wu.css';
import '../../css/h/hw8e09bdp.css';
import '../../css/q/qht3j6b8a.css';
import '../../css/o/o_wzfdb6i.css';
import '../../css/s/swtr90bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGiYNTqbdn" cx="10.97" cy="6.25" r="18.59" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="aosgag5wu wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="hw8e09bdp wm-a"/><path fill="url(#SVGiYNTqbdn)" class="qht3j6b8a wm-k"/><path class="o_wzfdb6i wm-shine"/><path class="swtr90bvy wm-deco"/></g>`,
		"fallback": "withicons-rangoli:chart-bar-horizontal",
	});
}

export default Component;
