import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epdkc8bhh.css';
import '../../css/y/y44aequ3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epdkc8bhh"/><path class="y44aequ3q"/></g>`,
		"fallback": "bi:backpack4-fill",
	});
}

export default Component;
