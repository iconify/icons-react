import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ebs84f_2e.css';
import '../../css/m/m5k7n0bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ebs84f_2e"/><path class="m5k7n0bzy"/></g>`,
		"fallback": "solar:arrow-left-from-line-bold",
	});
}

export default Component;
