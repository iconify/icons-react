import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_mtz_u4x.css';
import '../../css/f/f8bgs91bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y_mtz_u4x"/><path class="f8bgs91bf"/></g>`,
		"fallback": "solar:arrow-right-bold-duotone",
	});
}

export default Component;
