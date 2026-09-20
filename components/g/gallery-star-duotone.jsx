import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-h51r2pn.css';
import '../../css/j/jzlu0iy5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-h51r2pn"/><path clip-rule="evenodd" class="jzlu0iy5w"/></g>`,
		"fallback": "reicon:gallery-star-duotone",
	});
}

export default Component;
