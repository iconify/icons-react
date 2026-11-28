import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k_280xbgm.css';
import '../../css/p/ps-_u7tyq.css';
import '../../css/h/h3_zgubvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k_280xbgm"/><path class="ps-_u7tyq"/><path class="h3_zgubvx"/></g>`,
		"fallback": "iconaut:hd",
	});
}

export default Component;
