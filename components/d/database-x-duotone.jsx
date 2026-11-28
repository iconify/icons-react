import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u1hhj3awx.css';
import '../../css/k/k5qztgqsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u1hhj3awx"/><path class="k5qztgqsi primary"/></g>`,
		"fallback": "iconaut:database-x-duotone",
	});
}

export default Component;
