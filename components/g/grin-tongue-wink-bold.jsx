import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ewqrcbcqe.css';
import '../../css/v/vn5jz2y3k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ewqrcbcqe"/><path clip-rule="evenodd" class="vn5jz2y3k"/></g>`,
		"fallback": "glyphs:grin-tongue-wink-bold",
	});
}

export default Component;
