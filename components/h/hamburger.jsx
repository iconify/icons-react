import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7oitngpi.css';
import '../../css/h/ho72t4bwy.css';
import '../../css/c/cdzff5bms.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t7oitngpi"/><path clip-rule="evenodd" class="ho72t4bwy"/><path class="cdzff5bms"/></g>`,
		"fallback": "pepicons-print:hamburger",
	});
}

export default Component;
