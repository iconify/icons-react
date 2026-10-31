import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jbrpz0b3y.css';
import '../../css/o/oouwqtbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jbrpz0b3y"/><path class="oouwqtbjr"/></g>`,
		"fallback": "coolicons:chart-bubble-bulk-round",
	});
}

export default Component;
