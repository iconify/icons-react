import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/of0isobdn.css';
import '../../css/m/mvkrs-bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="of0isobdn"/><path class="mvkrs-bjx"/></g>`,
		"fallback": "solar:battery-low-minimalistic-bold",
	});
}

export default Component;
