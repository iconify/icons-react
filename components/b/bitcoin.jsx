import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/koh9d7bjo.css';
import '../../css/q/qxzfzbcla.css';
import '../../css/i/i06wpl4kz.css';
import '../../css/l/loxway67g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGCkjHmdou" x1="8.87" x2="12.87" y1="1.5" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="koh9d7bjo wm-k"/><path class="qxzfzbcla wm-deco"/><path fill="url(#SVGCkjHmdou)" class="i06wpl4kz wm-k"/><path class="loxway67g wm-shadow"/></g>`,
		"fallback": "withicons-valentine:bitcoin",
	});
}

export default Component;
