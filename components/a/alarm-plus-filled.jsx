import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bsyu2nb2d.css';
import '../../css/d/dk8s2e4mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bsyu2nb2d"/><path clip-rule="evenodd" class="dk8s2e4mv"/></g>`,
		"fallback": "reicon:alarm-plus-filled",
	});
}

export default Component;
