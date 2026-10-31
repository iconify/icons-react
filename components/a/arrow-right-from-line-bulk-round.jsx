import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x71w8dboq.css';
import '../../css/v/vu-a9egmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x71w8dboq"/><path class="vu-a9egmu"/></g>`,
		"fallback": "coolicons:arrow-right-from-line-bulk-round",
	});
}

export default Component;
