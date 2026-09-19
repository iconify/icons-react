import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tw15xm09z.css';
import '../../css/g/gmakcbblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tw15xm09z"/><path class="gmakcbblk"/></g>`,
		"fallback": "flowbite:chart-pie-solid",
	});
}

export default Component;
