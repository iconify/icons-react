import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/o/ouugfwbdl.css';
import '../../css/w/w99e3fgyw.css';
import '../../css/j/j7-ucebrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZpJZGbnW" x1="10" x2="14" y1="5.03" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ouugfwbdl wm-k"/><path class="w99e3fgyw wm-deco"/><path fill="url(#SVGZpJZGbnW)" class="j7-ucebrc wm-k"/></g>`,
		"fallback": "withicons-valentine:chevrons-right",
	});
}

export default Component;
