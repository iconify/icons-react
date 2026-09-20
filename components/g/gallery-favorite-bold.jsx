import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/knakeobkq.css';
import '../../css/m/mlqy4y12v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="knakeobkq"/><path class="mlqy4y12v"/></g>`,
		"fallback": "solar:gallery-favorite-bold",
	});
}

export default Component;
