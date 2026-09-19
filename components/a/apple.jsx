import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fi_zm-uwm.css';
import '../../css/l/lj0sj4eka.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fi_zm-uwm"/><path class="lj0sj4eka"/></g>`,
		"fallback": "at-icons:apple",
	});
}

export default Component;
