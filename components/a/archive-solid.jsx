import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gaflgccxx.css';
import '../../css/j/j-zaf6bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gaflgccxx"/><path class="j-zaf6bth"/></g>`,
		"fallback": "flowbite:archive-solid",
	});
}

export default Component;
