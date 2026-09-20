import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-mr3_a8v.css';
import '../../css/p/p52hl-d0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y-mr3_a8v"/><path class="p52hl-d0s"/></g>`,
		"fallback": "solar:fire-minimalistic-bold-duotone",
	});
}

export default Component;
