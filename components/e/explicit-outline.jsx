import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k81on57tj.css';
import '../../css/n/ntbdt-bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k81on57tj"/><path clip-rule="evenodd" class="ntbdt-bxq"/></g>`,
		"fallback": "solar:explicit-outline",
	});
}

export default Component;
