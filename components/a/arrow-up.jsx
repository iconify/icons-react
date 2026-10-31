import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/j/j-1o44bet.css';
import '../../css/a/a0_mxjxmg.css';
import '../../css/v/va_o1qb7q.css';
import '../../css/s/s8zn0lcvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGy0nPRC9i" x1="10" x2="14" y1="3.03" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="j-1o44bet wm-k"/><path class="a0_mxjxmg wm-deco"/><path fill="url(#SVGy0nPRC9i)" class="va_o1qb7q wm-k"/><path class="s8zn0lcvq wm-shadow"/></g>`,
		"fallback": "withicons-valentine:arrow-up",
	});
}

export default Component;
