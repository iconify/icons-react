import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwwnm_5ft.css';
import '../../css/l/la-33bykb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kwwnm_5ft"/><path class="la-33bykb"/></g>`,
		"fallback": "coolicons:coffee-to-go-bulk-round",
	});
}

export default Component;
