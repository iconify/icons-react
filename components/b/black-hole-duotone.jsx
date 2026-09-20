import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bf2xbubes.css';
import '../../css/t/t6iretb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bf2xbubes"/><path class="t6iretb8z"/></g>`,
		"fallback": "reicon:black-hole-duotone",
	});
}

export default Component;
