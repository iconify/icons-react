import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ty4kh0x2p.css';
import '../../css/y/yh9eywmcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ty4kh0x2p"/><path class="yh9eywmcf"/></g>`,
		"fallback": "solar:bone-bold-duotone",
	});
}

export default Component;
