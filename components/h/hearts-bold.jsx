import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yzh9qcc2z.css';
import '../../css/r/r974g13fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yzh9qcc2z"/><path class="r974g13fg"/></g>`,
		"fallback": "solar:hearts-bold",
	});
}

export default Component;
