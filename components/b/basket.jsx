import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxnjyw8wq.css';
import '../../css/u/uk78b_t8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fxnjyw8wq"/><path clip-rule="evenodd" class="uk78b_t8s"/></g>`,
		"fallback": "reicon:basket",
	});
}

export default Component;
