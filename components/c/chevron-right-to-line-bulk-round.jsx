import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np2e86c6q.css';
import '../../css/l/lbaw04box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="np2e86c6q"/><path class="lbaw04box"/></g>`,
		"fallback": "coolicons:chevron-right-to-line-bulk-round",
	});
}

export default Component;
