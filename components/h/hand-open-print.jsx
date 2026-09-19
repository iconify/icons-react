import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njvgssbrw.css';
import '../../css/u/u4s-g6b9d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="njvgssbrw"/><path class="u4s-g6b9d"/></g>`,
		"fallback": "pepicons:hand-open-print",
	});
}

export default Component;
