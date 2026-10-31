import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bc0ft1biw.css';
import '../../css/u/uknh1s19v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bc0ft1biw"/><path class="uknh1s19v"/></g>`,
		"fallback": "coolicons:building-2-bulk-round",
	});
}

export default Component;
