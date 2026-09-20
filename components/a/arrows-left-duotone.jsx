import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yoe8aacxr.css';
import '../../css/v/v8roo-bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yoe8aacxr"/><path clip-rule="evenodd" class="v8roo-bxc"/></g>`,
		"fallback": "reicon:arrows-left-duotone",
	});
}

export default Component;
