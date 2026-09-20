import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qma7dtbwt.css';
import '../../css/j/jr65o58xn.css';
import '../../css/i/infop7dit.css';
import '../../css/x/xxj3osb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qma7dtbwt"/><path class="jr65o58xn"/><path class="infop7dit"/><path class="xxj3osb-s"/></g>`,
		"fallback": "solar:blocks-bold",
	});
}

export default Component;
