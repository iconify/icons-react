import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/atsiikfve.css';
import '../../css/l/lksis4mtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="atsiikfve"/><path class="lksis4mtx"/></g>`,
		"fallback": "solar:filter-close-outline",
	});
}

export default Component;
