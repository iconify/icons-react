import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-vi-cgti.css';
import '../../css/j/jkij7ptex.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-vi-cgti"/><path class="jkij7ptex"/></g>`,
		"fallback": "heroicons:arrow-top-right-on-square-16-solid",
	});
}

export default Component;
