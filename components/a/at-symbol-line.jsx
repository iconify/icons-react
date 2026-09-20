import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/keiz3cb_u.css';
import '../../css/p/pbl6wb7bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="keiz3cb_u"/><path class="pbl6wb7bg"/></g>`,
		"fallback": "majesticons:at-symbol-line",
	});
}

export default Component;
