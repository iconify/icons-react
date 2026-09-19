import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/titp7-88u.css';
import '../../css/w/wh8sumbmo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="titp7-88u"/><path class="wh8sumbmo"/></g>`,
		"fallback": "glyphs:border-style-bold",
	});
}

export default Component;
