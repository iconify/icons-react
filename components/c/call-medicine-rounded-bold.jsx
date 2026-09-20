import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zw6k_59qj.css';
import '../../css/m/mg6lbnbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zw6k_59qj"/><path clip-rule="evenodd" class="mg6lbnbje"/></g>`,
		"fallback": "solar:call-medicine-rounded-bold",
	});
}

export default Component;
