import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tbitl8blt.css';
import '../../css/e/edsk0qb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tbitl8blt"/><path class="edsk0qb6y"/></g>`,
		"fallback": "coolicons:croissant-bulk-round",
	});
}

export default Component;
