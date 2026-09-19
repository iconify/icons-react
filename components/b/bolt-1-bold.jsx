import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e7wx1ub6n.css';
import '../../css/j/jfwvnqbjk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e7wx1ub6n"/><path class="jfwvnqbjk"/></g>`,
		"fallback": "glyphs:bolt-1-bold",
	});
}

export default Component;
