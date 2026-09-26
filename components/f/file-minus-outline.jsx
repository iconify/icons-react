import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iheroob0v.css';
import '../../css/f/f_7mvhbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iheroob0v"/><path clip-rule="evenodd" class="f_7mvhbyy"/></g>`,
		"fallback": "solar:file-minus-outline",
	});
}

export default Component;
