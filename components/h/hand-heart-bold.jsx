import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzsksuw1d.css';
import '../../css/k/kg7n_ub0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gzsksuw1d"/><path class="kg7n_ub0x"/></g>`,
		"fallback": "solar:hand-heart-bold",
	});
}

export default Component;
