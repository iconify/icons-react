import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo4-pu8iy.css';
import '../../css/g/g01y_xnbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xo4-pu8iy"/><path class="g01y_xnbt"/></g>`,
		"fallback": "solar:chevron-first-bold-duotone",
	});
}

export default Component;
