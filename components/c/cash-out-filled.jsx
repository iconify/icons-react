import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oov-sy6dd.css';
import '../../css/u/u_oczoyaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oov-sy6dd"/><path class="u_oczoyaz"/></g>`,
		"fallback": "reicon:cash-out-filled",
	});
}

export default Component;
