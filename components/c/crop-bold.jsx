import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ilfmgbc3c.css';
import '../../css/z/zl063ub9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ilfmgbc3c"/><path class="zl063ub9s"/></g>`,
		"fallback": "solar:crop-bold",
	});
}

export default Component;
