import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qeb1pybzj.css';
import '../../css/x/xjb75jjvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qeb1pybzj"/><path class="xjb75jjvk"/></g>`,
		"fallback": "pixelarticons:icons",
	});
}

export default Component;
