import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uk0_6c3iy.css';
import '../../css/s/syyca7b8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uk0_6c3iy"/><path class="syyca7b8i"/></g>`,
		"fallback": "at-icons:book",
	});
}

export default Component;
