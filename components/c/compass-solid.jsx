import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hslfy9boj.css';
import '../../css/q/qfh-p4brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hslfy9boj"/><path class="qfh-p4brz"/></g>`,
		"fallback": "mynaui:compass-solid",
	});
}

export default Component;
