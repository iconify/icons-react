import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vahsigbbz.css';
import '../../css/k/kxru1fbzg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vahsigbbz"/><rect class="kxru1fbzg"/></g>`,
		"fallback": "glyphs:center-focus-strong-bold",
	});
}

export default Component;
