import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/m/m1ouwcbbo.css';
import '../../css/j/jxwzj4b-n.css';
import '../../css/d/dotfsehsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtl0ZkcFC" x1="10" x2="14" y1="2.52" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="m1ouwcbbo wm-k"/><path class="jxwzj4b-n wm-deco"/><path fill="url(#SVGtl0ZkcFC)" class="dotfsehsy wm-k"/></g>`,
		"fallback": "withicons-valentine:chart-spline",
	});
}

export default Component;
