import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fmuvdrx2z.css';
import '../../css/o/o9up0vbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fmuvdrx2z"/><path clip-rule="evenodd" class="o9up0vbfz"/></g>`,
		"fallback": "heroicons:calendar-days-solid",
	});
}

export default Component;
