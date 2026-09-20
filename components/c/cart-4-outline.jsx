import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lqn-dvsax.css';
import '../../css/m/mp4zrdbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lqn-dvsax"/><path clip-rule="evenodd" class="mp4zrdbaa"/></g>`,
		"fallback": "solar:cart-4-outline",
	});
}

export default Component;
