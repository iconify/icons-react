import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5fdzhb0n.css';
import '../../css/w/w1gnalb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k5fdzhb0n"/><path clip-rule="evenodd" class="w1gnalb7u"/></g>`,
		"fallback": "reicon:exit",
	});
}

export default Component;
