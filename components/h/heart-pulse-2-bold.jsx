import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/av17uy_yo.css';
import '../../css/p/pphzle30r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="av17uy_yo"/><path class="pphzle30r"/></g>`,
		"fallback": "solar:heart-pulse-2-bold",
	});
}

export default Component;
