import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u3rxgw2ip.css';
import '../../css/z/zu4i1xbee.css';
import '../../css/h/hpyuekbbe.css';
import '../../css/u/u4fque1ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u3rxgw2ip wm-shadow"/><path class="zu4i1xbee"/><path class="hpyuekbbe"/><path class="u4fque1ix"/></g>`,
		"fallback": "withicons-retro:headphones",
	});
}

export default Component;
