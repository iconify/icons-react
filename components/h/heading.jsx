import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/m/mij2zub_t.css';
import '../../css/b/bsx3-igev.css';
import '../../css/q/q-hfvyb-k.css';
import '../../css/i/i5xrlhb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhFnIkxqz" x1="10" x2="14" y1="3.01" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="mij2zub_t wm-k"/><path class="bsx3-igev wm-deco"/><path fill="url(#SVGhFnIkxqz)" class="q-hfvyb-k wm-k"/><path class="i5xrlhb4r wm-shadow"/></g>`,
		"fallback": "withicons-valentine:heading",
	});
}

export default Component;
