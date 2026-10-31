import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/psj7kd7rk.css';
import '../../css/i/i56qm-mfl.css';
import '../../css/c/clnwqvboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG0haCpdbX" x1="9.81" x2="13.81" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="psj7kd7rk wm-k"/><path class="i56qm-mfl wm-deco"/><path fill="url(#SVG0haCpdbX)" class="clnwqvboz wm-k"/></g>`,
		"fallback": "withicons-valentine:contactless",
	});
}

export default Component;
