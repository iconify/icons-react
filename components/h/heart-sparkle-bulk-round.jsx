import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ox1bc9gwd.css';
import '../../css/y/yswm6vqbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ox1bc9gwd"/><path class="yswm6vqbi"/></g>`,
		"fallback": "coolicons:heart-sparkle-bulk-round",
	});
}

export default Component;
