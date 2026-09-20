import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/naygropza.css';
import '../../css/g/g0buu5bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="naygropza"/><path clip-rule="evenodd" class="g0buu5bqh"/></g>`,
		"fallback": "solar:bell-ring-outline",
	});
}

export default Component;
