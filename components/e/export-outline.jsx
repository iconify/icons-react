import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tmifx476y.css';
import '../../css/h/hd_d-3tqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tmifx476y"/><path class="hd_d-3tqq"/></g>`,
		"fallback": "solar:export-outline",
	});
}

export default Component;
