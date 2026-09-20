import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j53-ysb1o.css';
import '../../css/l/lho88zejy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j53-ysb1o"/><path class="lho88zejy"/></g>`,
		"fallback": "reicon:export",
	});
}

export default Component;
