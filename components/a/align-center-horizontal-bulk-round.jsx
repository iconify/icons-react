import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wei4hbwdb.css';
import '../../css/e/eh8x-4blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wei4hbwdb"/><path class="eh8x-4blr"/></g>`,
		"fallback": "coolicons:align-center-horizontal-bulk-round",
	});
}

export default Component;
