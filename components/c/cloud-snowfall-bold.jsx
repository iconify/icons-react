import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2c5gy2af.css';
import '../../css/g/g1qu834dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w2c5gy2af"/><path class="g1qu834dq"/></g>`,
		"fallback": "solar:cloud-snowfall-bold",
	});
}

export default Component;
