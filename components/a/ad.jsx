import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k_280xbgm.css';
import '../../css/c/c48wx8bva.css';
import '../../css/x/xrswswblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k_280xbgm"/><path class="c48wx8bva"/><path class="xrswswblo"/></g>`,
		"fallback": "iconaut:ad",
	});
}

export default Component;
