import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1y3kfbin.css';
import '../../css/s/s74vj3pvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1y3kfbin"/><path class="s74vj3pvn"/></g>`,
		"fallback": "pixelarticons:corner-left-down-sharp",
	});
}

export default Component;
