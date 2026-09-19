import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d8xbtxbzg.css';
import '../../css/h/ht20_g4od.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d8xbtxbzg"/><path class="ht20_g4od"/></g>`,
		"fallback": "bi:device-hdd-fill",
	});
}

export default Component;
