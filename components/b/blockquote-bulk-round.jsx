import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x71w8dboq.css';
import '../../css/q/q52ufyo2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x71w8dboq"/><path class="q52ufyo2q"/></g>`,
		"fallback": "coolicons:blockquote-bulk-round",
	});
}

export default Component;
