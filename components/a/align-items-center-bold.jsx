import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/er-xn1bcz.css';
import '../../css/q/q88ol6dra.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="er-xn1bcz"/><path class="q88ol6dra"/></g>`,
		"fallback": "glyphs:align-items-center-bold",
	});
}

export default Component;
