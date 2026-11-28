import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hhw-sxbck.css';
import '../../css/e/eoonfgcbu.css';
import '../../css/j/jjxa_gbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hhw-sxbck"/><path class="eoonfgcbu"/><path class="jjxa_gbov"/></g>`,
		"fallback": "iconaut:bluetooth-connected",
	});
}

export default Component;
