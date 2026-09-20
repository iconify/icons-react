import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whz6uu_tj.css';
import '../../css/h/h8zib0b8j.css';
import '../../css/v/vik802c-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="whz6uu_tj"/><path class="h8zib0b8j"/><path class="vik802c-d"/></g>`,
		"fallback": "solar:columns-3-bold-duotone",
	});
}

export default Component;
