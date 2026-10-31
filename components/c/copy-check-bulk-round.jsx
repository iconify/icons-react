import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwdgl7bfy.css';
import '../../css/m/mahsv7rtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lwdgl7bfy"/><path class="mahsv7rtz"/></g>`,
		"fallback": "coolicons:copy-check-bulk-round",
	});
}

export default Component;
