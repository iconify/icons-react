import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mwyb9cv3b.css';
import '../../css/w/w-0i0z5mu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="mwyb9cv3b"/><rect class="w-0i0z5mu"/><rect class="mwyb9cv3b"/><rect class="w-0i0z5mu"/></g>`,
		"fallback": "pepicons:cloud-filled",
	});
}

export default Component;
