import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvbe4jb6b.css';
import '../../css/k/k4yesgb8v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pvbe4jb6b"/><path class="k4yesgb8v"/></g>`,
		"fallback": "heroicons-solid:inbox-arrow-down",
	});
}

export default Component;
