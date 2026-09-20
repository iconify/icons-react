import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/omn0ubb6w.css';
import '../../css/o/oopjkv94t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="omn0ubb6w"/><path class="oopjkv94t"/></g>`,
		"fallback": "solar:cloud-sun-bold",
	});
}

export default Component;
