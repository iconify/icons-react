import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w6rjiub4c.css';
import '../../css/d/dzysy8bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w6rjiub4c"/><path clip-rule="evenodd" class="dzysy8bra"/></g>`,
		"fallback": "solar:dislike-bold-duotone",
	});
}

export default Component;
