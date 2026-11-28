import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8tk9cbtx.css';
import '../../css/j/jtq64zbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary v8tk9cbtx"/><path class="jtq64zbsj primary"/></g>`,
		"fallback": "iconaut:align-right-2-duotone",
	});
}

export default Component;
