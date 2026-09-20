import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwulfzs6k.css';
import '../../css/j/j460d2bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fwulfzs6k"/><path clip-rule="evenodd" class="j460d2bdb"/></g>`,
		"fallback": "solar:folder-clock-bold",
	});
}

export default Component;
