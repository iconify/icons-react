import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vh2hsbcgb.css';
import '../../css/n/nrl7b1rkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vh2hsbcgb"/><path class="nrl7b1rkc"/></g>`,
		"fallback": "coolicons:eyedropper-bulk-round",
	});
}

export default Component;
