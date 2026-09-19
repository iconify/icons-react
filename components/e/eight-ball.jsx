import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j3w_0hbnl.css';
import '../../css/e/esueddc8x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j3w_0hbnl"/><path class="esueddc8x"/></g>`,
		"fallback": "at-icons:eight-ball",
	});
}

export default Component;
