import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yw4k-3b3p.css';
import '../../css/v/vdc6fzbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yw4k-3b3p"/><path class="vdc6fzbmt"/></g>`,
		"fallback": "solar:alt-arrow-down-bold-duotone",
	});
}

export default Component;
