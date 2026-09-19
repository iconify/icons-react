import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/an8ojccmt.css';
import '../../css/w/wv6lxgbyg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="an8ojccmt"/><path clip-rule="evenodd" class="wv6lxgbyg"/></g>`,
		"fallback": "glyphs:image-1-bold",
	});
}

export default Component;
