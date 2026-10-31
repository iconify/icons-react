import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/priadbbcm.css';
import '../../css/l/l-b2tfzaz.css';
import '../../css/w/wkcm7viwu.css';
import '../../css/d/deoqte96r.css';
import '../../css/q/q7sd_5e-d.css';
import '../../css/t/tly1qz7ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGk1tGubXX" x1="10.5" x2="14.5" y1="1.57" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="priadbbcm wm-k"/><path class="l-b2tfzaz wm-deco"/><path fill="url(#SVGk1tGubXX)" class="wkcm7viwu wm-k"/><path class="deoqte96r wm-shadow"/><path class="q7sd_5e-d wm-shine"/><path class="tly1qz7ww wm-shine"/></g>`,
		"fallback": "withicons-valentine:flag-checkered",
	});
}

export default Component;
