import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zm4entb4o.css';
import '../../css/w/walkp0vuh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zm4entb4o"/><path clip-rule="evenodd" class="walkp0vuh"/></g>`,
		"fallback": "glyphs:building-hospital-bold",
	});
}

export default Component;
