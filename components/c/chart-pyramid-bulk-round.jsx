import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6ba3ccbg.css';
import '../../css/j/j4qh7cpvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i6ba3ccbg"/><path class="j4qh7cpvq"/></g>`,
		"fallback": "coolicons:chart-pyramid-bulk-round",
	});
}

export default Component;
