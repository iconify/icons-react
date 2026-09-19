import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pj9dsccjw.css';
import '../../css/c/cloirtb_w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pj9dsccjw"/><path class="cloirtb_w"/></g>`,
		"fallback": "glyphs:comment-1-bold",
	});
}

export default Component;
