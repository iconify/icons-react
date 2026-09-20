import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h1a9_kbwo.css';
import '../../css/h/hajvu_ngz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h1a9_kbwo"/><path class="hajvu_ngz"/></g>`,
		"fallback": "solar:4k-linear",
	});
}

export default Component;
