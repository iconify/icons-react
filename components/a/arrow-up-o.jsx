import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vom5tskyx.css';
import '../../css/z/zb4lze2uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vom5tskyx"/><path clip-rule="evenodd" class="zb4lze2uh"/></g>`,
		"fallback": "gg:arrow-up-o",
	});
}

export default Component;
