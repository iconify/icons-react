import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/syc5w13sj.css';
import '../../css/i/i99o_022x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="syc5w13sj"/><path class="i99o_022x"/></g>`,
		"fallback": "reicon:food-tray-filled",
	});
}

export default Component;
