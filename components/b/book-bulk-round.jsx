import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5uqqklos.css';
import '../../css/e/e4t0_4b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l5uqqklos"/><path class="e4t0_4b7x"/></g>`,
		"fallback": "coolicons:book-bulk-round",
	});
}

export default Component;
