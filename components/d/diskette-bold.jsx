import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mo6cqlt7e.css';
import '../../css/y/ygd5lkb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mo6cqlt7e"/><path class="ygd5lkb9x"/></g>`,
		"fallback": "solar:diskette-bold",
	});
}

export default Component;
