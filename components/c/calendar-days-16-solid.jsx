import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7_8zqbqv.css';
import '../../css/n/n7f3sbidh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7_8zqbqv"/><path clip-rule="evenodd" class="n7f3sbidh"/></g>`,
		"fallback": "heroicons:calendar-days-16-solid",
	});
}

export default Component;
