import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5uqqklos.css';
import '../../css/w/w97bm9hkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l5uqqklos"/><path class="w97bm9hkc"/></g>`,
		"fallback": "coolicons:book-sparkle-bulk-round",
	});
}

export default Component;
