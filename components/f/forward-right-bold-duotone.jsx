import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xneae_4qg.css';
import '../../css/t/t9tgkx6hi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xneae_4qg"/><path class="t9tgkx6hi"/></g>`,
		"fallback": "solar:forward-right-bold-duotone",
	});
}

export default Component;
