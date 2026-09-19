import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ik5nj9j4t.css';
import '../../css/a/az4go6brx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ik5nj9j4t"/><path clip-rule="evenodd" class="az4go6brx"/></g>`,
		"fallback": "glyphs:circle-half-1-bold",
	});
}

export default Component;
