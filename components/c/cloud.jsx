import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rczdnpkkp.css';
import '../../css/w/wyt8f7b9l.css';
import '../../css/j/jkhbwcbmk.css';
import '../../css/s/s0g7icalo.css';
import '../../css/k/k2z0-lbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rczdnpkkp wm-shadow"/><path class="wyt8f7b9l"/><path class="jkhbwcbmk"/><path class="s0g7icalo"/><path class="k2z0-lbpo"/></g>`,
		"fallback": "withicons-retro:cloud",
	});
}

export default Component;
