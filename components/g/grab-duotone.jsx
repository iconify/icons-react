import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/od00e7bcu.css';
import '../../css/t/tzfvoy4ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="od00e7bcu secondary"/><path class="primary tzfvoy4ju"/></g>`,
		"fallback": "iconaut:grab-duotone",
	});
}

export default Component;
