import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hozbc3b1b.css';
import '../../css/h/h7sctgbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hozbc3b1b"/><path class="h7sctgbgc"/></g>`,
		"fallback": "solar:document-2-bold",
	});
}

export default Component;
