import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuq5pmbnt.css';
import '../../css/f/feerx9prf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wuq5pmbnt"/><path class="feerx9prf"/></g>`,
		"fallback": "heroicons:gift-20-solid",
	});
}

export default Component;
