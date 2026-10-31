import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/t6__tzb6k.css';
import '../../css/s/swjz6lbyv.css';
import '../../css/a/aeln9jb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZpJZGbnW" x1="10" x2="14" y1="5.03" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="t6__tzb6k wm-k"/><path class="swjz6lbyv wm-deco"/><path fill="url(#SVGZpJZGbnW)" class="aeln9jb6n wm-k"/></g>`,
		"fallback": "withicons-valentine:chevrons-up",
	});
}

export default Component;
