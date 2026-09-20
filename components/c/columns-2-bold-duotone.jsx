import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i8pz1lb3m.css';
import '../../css/w/whz6uu_tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i8pz1lb3m"/><path class="whz6uu_tj"/></g>`,
		"fallback": "solar:columns-2-bold-duotone",
	});
}

export default Component;
