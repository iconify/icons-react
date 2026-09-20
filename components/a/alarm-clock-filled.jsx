import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bsyu2nb2d.css';
import '../../css/j/j0w54bchb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bsyu2nb2d"/><path clip-rule="evenodd" class="j0w54bchb"/></g>`,
		"fallback": "reicon:alarm-clock-filled",
	});
}

export default Component;
