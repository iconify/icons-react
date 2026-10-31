import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ljeccnb5s.css';
import '../../css/k/kqkww4b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ljeccnb5s"/><path class="kqkww4b8y"/></g>`,
		"fallback": "coolicons:camera-sparkle-bulk-round",
	});
}

export default Component;
