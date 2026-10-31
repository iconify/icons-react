import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/c/cewxasbhb.css';
import '../../css/k/k17k65agz.css';
import '../../css/o/olvcxcbjr.css';
import '../../css/y/yan_gww6l.css';
import '../../css/k/kxior7wfr.css';
import '../../css/d/dsrgxsbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGI1Ocgc9p" x1="10" x2="14" y1="1.65" y2="22.36" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="cewxasbhb wm-k"/><path class="k17k65agz wm-deco"/><path fill="url(#SVGI1Ocgc9p)" class="olvcxcbjr wm-k"/><path class="wm-shadow yan_gww6l"/><path class="kxior7wfr wm-shine"/><path class="dsrgxsbva wm-shine"/></g>`,
		"fallback": "withicons-valentine:globe",
	});
}

export default Component;
