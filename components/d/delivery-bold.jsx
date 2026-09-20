import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pq429l9zn.css';
import '../../css/b/bp50gk8nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pq429l9zn"/><path class="bp50gk8nz"/></g>`,
		"fallback": "solar:delivery-bold",
	});
}

export default Component;
