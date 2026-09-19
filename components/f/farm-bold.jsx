import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/icg0foupe.css';
import '../../css/j/j8w7tpbmi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="icg0foupe"/><path class="j8w7tpbmi"/></g>`,
		"fallback": "glyphs:farm-bold",
	});
}

export default Component;
