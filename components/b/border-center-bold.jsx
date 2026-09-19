import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j1ikvobjf.css';
import '../../css/c/cgnq5970k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j1ikvobjf"/><path class="cgnq5970k"/></g>`,
		"fallback": "glyphs:border-center-bold",
	});
}

export default Component;
