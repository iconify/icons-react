import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c__mb4b-e.css';
import '../../css/a/a5fi6ib0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c__mb4b-e"/><path class="a5fi6ib0b"/></g>`,
		"fallback": "flowbite:cloud-arrow-up-solid",
	});
}

export default Component;
