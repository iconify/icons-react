import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zyf2zcy_t.css';
import '../../css/q/qc63arbxz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zyf2zcy_t"/><path class="qc63arbxz"/></g>`,
		"fallback": "pullo:chat-plus-duotone",
	});
}

export default Component;
