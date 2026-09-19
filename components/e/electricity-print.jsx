import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a58d-47ev.css';
import '../../css/l/lcntl7int.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a58d-47ev"/><path clip-rule="evenodd" class="lcntl7int"/></g>`,
		"fallback": "pepicons:electricity-print",
	});
}

export default Component;
