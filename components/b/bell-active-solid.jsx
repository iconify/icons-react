import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qsl8tybzt.css';
import '../../css/a/a0n6y4bzr.css';
import '../../css/s/s0y15yb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qsl8tybzt"/><path clip-rule="evenodd" class="a0n6y4bzr"/><path class="s0y15yb6e"/></g>`,
		"fallback": "flowbite:bell-active-solid",
	});
}

export default Component;
