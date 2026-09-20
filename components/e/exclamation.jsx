import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5es72bon.css';
import '../../css/a/a6vc22b0k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m5es72bon"/><path class="a6vc22b0k"/></g>`,
		"fallback": "pepicons-pencil:exclamation",
	});
}

export default Component;
