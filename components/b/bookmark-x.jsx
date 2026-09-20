import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sqzqetb9g.css';
import '../../css/t/tskujnz9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sqzqetb9g"/><path clip-rule="evenodd" class="tskujnz9x"/></g>`,
		"fallback": "reicon:bookmark-x",
	});
}

export default Component;
