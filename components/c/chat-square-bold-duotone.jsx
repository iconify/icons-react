import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/umxn_1jgf.css';
import '../../css/b/bb9sfibcs.css';
import '../../css/i/i60oyac0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="umxn_1jgf"/><path clip-rule="evenodd" class="bb9sfibcs"/><path class="i60oyac0n"/></g>`,
		"fallback": "solar:chat-square-bold-duotone",
	});
}

export default Component;
