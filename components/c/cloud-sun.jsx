import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wt4xu6b4z.css';
import '../../css/s/shpvkzc0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wt4xu6b4z"/><path class="shpvkzc0o"/></g>`,
		"fallback": "bi:cloud-sun",
	});
}

export default Component;
