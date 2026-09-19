import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l44s8pbzo.css';
import '../../css/w/wh-sojvvh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l44s8pbzo"/><path class="wh-sojvvh"/></g>`,
		"fallback": "glyphs:bezier-triangle-bold",
	});
}

export default Component;
