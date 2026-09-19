import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8glvpbwu.css';
import '../../css/y/y03p8vbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c8glvpbwu"/><path clip-rule="evenodd" class="y03p8vbku"/></g>`,
		"fallback": "flowbite:bitcoin-solid",
	});
}

export default Component;
