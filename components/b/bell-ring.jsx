import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ur8rqccgv.css';
import '../../css/x/xznvoekor.css';
import '../../css/u/ussajy8ym.css';
import '../../css/u/utiq7_d6p.css';
import '../../css/r/riavolbye.css';
import '../../css/i/i9afm2bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ur8rqccgv wm-shadow"/><path class="xznvoekor"/><path class="ussajy8ym"/><path class="utiq7_d6p"/><path class="riavolbye"/><path class="i9afm2bto wm-s"/></g>`,
		"fallback": "withicons-retro:bell-ring",
	});
}

export default Component;
