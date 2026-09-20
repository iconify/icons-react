import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m71yivjqy.css';
import '../../css/t/th_r41zxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m71yivjqy"/><path class="th_r41zxh"/></g>`,
		"fallback": "reicon:bookmark-square-filled",
	});
}

export default Component;
