import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtvw8kbdh.css';
import '../../css/q/qefa9xb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wtvw8kbdh"/><path class="qefa9xb9o"/></g>`,
		"fallback": "coolicons:brush-bulk-round",
	});
}

export default Component;
