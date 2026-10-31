import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/zya08sbnd.css';
import '../../css/j/jwjq-fcvb.css';
import '../../css/k/kd2-gwb8x.css';
import '../../css/g/g_9_5p8lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKGfbaedK" x1="10" x2="14" y1="2.5" y2="21.68" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k zya08sbnd"/><path class="jwjq-fcvb wm-deco"/><path fill="url(#SVGKGfbaedK)" class="kd2-gwb8x wm-k"/><path class="g_9_5p8lv wm-shadow"/></g>`,
		"fallback": "withicons-valentine:filter",
	});
}

export default Component;
