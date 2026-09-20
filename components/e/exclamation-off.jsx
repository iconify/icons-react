import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5es72bon.css';
import '../../css/g/ga10_tpmp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m5es72bon"/><path class="ga10_tpmp"/></g>`,
		"fallback": "pepicons-pencil:exclamation-off",
	});
}

export default Component;
