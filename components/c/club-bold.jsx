import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fnov1-3bk.css';
import '../../css/g/g-abxlbia.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fnov1-3bk"/><path class="g-abxlbia"/></g>`,
		"fallback": "glyphs:club-bold",
	});
}

export default Component;
