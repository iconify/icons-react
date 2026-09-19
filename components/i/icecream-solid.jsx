import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1k56ly-i.css';
import '../../css/z/zkvvu0ndr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x1k56ly-i"/><path class="zkvvu0ndr"/></g>`,
		"fallback": "flowbite:icecream-solid",
	});
}

export default Component;
