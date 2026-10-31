import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/j/j1eaffb4u.css';
import '../../css/e/ewrt2lj4y.css';
import '../../css/m/m2rdfwawi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGU9zM5ZXw" x1="10" x2="14" y1="5.51" y2="18.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="j1eaffb4u wm-k"/><path class="ewrt2lj4y wm-deco"/><path fill="url(#SVGU9zM5ZXw)" class="m2rdfwawi wm-k"/></g>`,
		"fallback": "withicons-valentine:check",
	});
}

export default Component;
