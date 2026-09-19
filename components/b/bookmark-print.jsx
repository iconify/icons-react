import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwof0sbkm.css';
import '../../css/t/th4mwabwz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gwof0sbkm"/><path clip-rule="evenodd" class="th4mwabwz"/></g>`,
		"fallback": "pepicons:bookmark-print",
	});
}

export default Component;
