import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7hhevbfm.css';
import '../../css/c/c96ivsblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary t7hhevbfm"/><path class="c96ivsblc primary"/></g>`,
		"fallback": "iconaut:cake-duotone",
	});
}

export default Component;
