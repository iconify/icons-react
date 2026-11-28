import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-4bg37ju.css';
import '../../css/o/oi7cl0bfz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h-4bg37ju"/><path class="oi7cl0bfz"/></g>`,
		"fallback": "pullo:bee-duotone",
	});
}

export default Component;
