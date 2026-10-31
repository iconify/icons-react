import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/woo7mpbwp.css';
import '../../css/u/uqgm99bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="woo7mpbwp"/><path class="uqgm99bvz"/></g>`,
		"fallback": "coolicons:gauge-bulk-round",
	});
}

export default Component;
