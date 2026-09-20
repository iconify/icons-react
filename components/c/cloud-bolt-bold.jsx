import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pl5r4sbgq.css';
import '../../css/g/g6a97ubua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pl5r4sbgq"/><path class="g6a97ubua"/></g>`,
		"fallback": "solar:cloud-bolt-bold",
	});
}

export default Component;
