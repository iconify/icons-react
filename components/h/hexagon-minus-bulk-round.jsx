import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1ndt2nsh.css';
import '../../css/z/zoty4-bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q1ndt2nsh"/><path class="zoty4-bai"/></g>`,
		"fallback": "coolicons:hexagon-minus-bulk-round",
	});
}

export default Component;
