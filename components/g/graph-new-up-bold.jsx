import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szj78gb-d.css';
import '../../css/n/n5fjpab4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="szj78gb-d"/><path class="n5fjpab4o"/></g>`,
		"fallback": "solar:graph-new-up-bold",
	});
}

export default Component;
