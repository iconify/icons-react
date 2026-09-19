import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/az4go6brx.css';
import '../../css/k/kvtiqrbhu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="az4go6brx"/><path class="kvtiqrbhu"/></g>`,
		"fallback": "glyphs:circle-half-bold",
	});
}

export default Component;
