import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwqobxbpr.css';
import '../../css/t/tek3ap7hs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jwqobxbpr"/><path class="tek3ap7hs"/></g>`,
		"fallback": "heroicons-solid:clipboard-document",
	});
}

export default Component;
