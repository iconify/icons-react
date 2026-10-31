import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a25oy8brj.css';
import '../../css/q/qxxrgx6kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a25oy8brj"/><path class="qxxrgx6kr"/></g>`,
		"fallback": "coolicons:ambulance-bulk-round",
	});
}

export default Component;
