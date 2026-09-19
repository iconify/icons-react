import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nj9ie88vs.css';
import '../../css/g/gupue5bti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nj9ie88vs"/><path class="gupue5bti"/></g>`,
		"fallback": "at-icons:head-with-gear",
	});
}

export default Component;
