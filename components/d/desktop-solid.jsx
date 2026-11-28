import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/klso518cs.css';
import '../../css/v/vo7bh2c8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="klso518cs"/><path class="vo7bh2c8s"/></g>`,
		"fallback": "iconaut:desktop-solid",
	});
}

export default Component;
