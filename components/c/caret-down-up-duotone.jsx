import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yzblwdbia.css';
import '../../css/t/tbma7ibtm.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yzblwdbia"/><path class="tbma7ibtm"/></g>`,
		"fallback": "pullo:caret-down-up-duotone",
	});
}

export default Component;
