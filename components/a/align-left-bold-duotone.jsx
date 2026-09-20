import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a6k_b7bis.css';
import '../../css/a/ao6ucc9jp.css';
import '../../css/u/uq1eecbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a6k_b7bis"/><path class="ao6ucc9jp"/><path clip-rule="evenodd" class="uq1eecbkj"/></g>`,
		"fallback": "solar:align-left-bold-duotone",
	});
}

export default Component;
