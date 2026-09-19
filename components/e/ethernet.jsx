import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sk4ab9tio.css';
import '../../css/i/ig_bvwdzg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sk4ab9tio"/><path class="ig_bvwdzg"/></g>`,
		"fallback": "bi:ethernet",
	});
}

export default Component;
