import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktqglihfs.css';
import '../../css/j/jt9a1bpvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ktqglihfs secondary"/><path class="jt9a1bpvm primary"/></g>`,
		"fallback": "iconaut:bee-duotone",
	});
}

export default Component;
