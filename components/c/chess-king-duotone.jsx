import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l73ls6bvt.css';
import '../../css/s/s5gevcc-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l73ls6bvt secondary"/><path class="primary s5gevcc-x"/></g>`,
		"fallback": "iconaut:chess-king-duotone",
	});
}

export default Component;
