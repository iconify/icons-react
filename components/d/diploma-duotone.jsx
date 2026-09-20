import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4ibccjoa.css';
import '../../css/p/p23v07b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y4ibccjoa"/><path class="p23v07b_i"/></g>`,
		"fallback": "reicon:diploma-duotone",
	});
}

export default Component;
