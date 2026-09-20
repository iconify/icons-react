import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i702m-bgc.css';
import '../../css/o/omu5u4v-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i702m-bgc"/><path clip-rule="evenodd" class="omu5u4v-d"/></g>`,
		"fallback": "reicon:home-add2",
	});
}

export default Component;
