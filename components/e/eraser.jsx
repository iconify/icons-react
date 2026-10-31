import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sw37aabtk.css';
import '../../css/n/nwwvoibzp.css';
import '../../css/m/mzwobbc-v.css';
import '../../css/v/vvawe3u2y.css';
import '../../css/w/wpn94cc7d.css';
import '../../css/u/u6rhwsg4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sw37aabtk wm-shadow"/><path class="nwwvoibzp"/><path class="mzwobbc-v"/><path class="vvawe3u2y"/><path class="wpn94cc7d"/><path class="u6rhwsg4y"/></g>`,
		"fallback": "withicons-retro:eraser",
	});
}

export default Component;
