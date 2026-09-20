import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j03c7cc4b.css';
import '../../css/o/omu5u4v-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j03c7cc4b"/><path clip-rule="evenodd" class="omu5u4v-d"/></g>`,
		"fallback": "reicon:home-smile2",
	});
}

export default Component;
