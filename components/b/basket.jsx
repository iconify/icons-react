import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0bge4cqz.css';
import '../../css/l/l05nigbse.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a0bge4cqz"/><path class="l05nigbse"/></g>`,
		"fallback": "et:basket",
	});
}

export default Component;
