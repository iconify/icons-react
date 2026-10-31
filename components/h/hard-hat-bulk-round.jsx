import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhmodw5xx.css';
import '../../css/b/bmu9nf3kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vhmodw5xx"/><path class="bmu9nf3kz"/></g>`,
		"fallback": "coolicons:hard-hat-bulk-round",
	});
}

export default Component;
