import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jojleqb8h.css';
import '../../css/y/ya30ufbie.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jojleqb8h"/><path class="ya30ufbie"/></g>`,
		"fallback": "at-icons:cloud-arrow-up",
	});
}

export default Component;
