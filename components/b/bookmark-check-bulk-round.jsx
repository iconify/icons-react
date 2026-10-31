import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ih_51cbzi.css';
import '../../css/n/n-nk49k3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ih_51cbzi"/><path class="n-nk49k3d"/></g>`,
		"fallback": "coolicons:bookmark-check-bulk-round",
	});
}

export default Component;
