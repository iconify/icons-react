import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yxwfok3uu.css';
import '../../css/s/s8zvn4tvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yxwfok3uu"/><path class="s8zvn4tvb"/></g>`,
		"fallback": "solar:calendar-minimalistic-bold",
	});
}

export default Component;
