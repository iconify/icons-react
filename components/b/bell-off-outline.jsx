import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/imjvgdxia.css';
import '../../css/o/owo5aibky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="imjvgdxia"/><path clip-rule="evenodd" class="owo5aibky"/></g>`,
		"fallback": "solar:bell-off-outline",
	});
}

export default Component;
