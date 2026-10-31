import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/srq7veb4z.css';
import '../../css/l/ld9c7pb2i.css';
import '../../css/z/znyq3ij4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGModhGeLT" x1="10" x2="14" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="srq7veb4z wm-k"/><path class="ld9c7pb2i wm-deco"/><path fill="url(#SVGModhGeLT)" class="wm-k znyq3ij4g"/></g>`,
		"fallback": "withicons-valentine:audio-lines",
	});
}

export default Component;
