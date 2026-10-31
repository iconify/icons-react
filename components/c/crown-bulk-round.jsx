import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oia3w71ua.css';
import '../../css/l/l-bd8kbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oia3w71ua"/><path class="l-bd8kbsd"/></g>`,
		"fallback": "coolicons:crown-bulk-round",
	});
}

export default Component;
