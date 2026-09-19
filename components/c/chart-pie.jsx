import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m1qwg_byj.css';
import '../../css/a/aenzmacxn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m1qwg_byj"/><path class="aenzmacxn"/></g>`,
		"fallback": "heroicons-solid:chart-pie",
	});
}

export default Component;
