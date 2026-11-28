import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3rw-kbsd.css';
import '../../css/r/r9-q64b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c3rw-kbsd secondary"/><path class="primary r9-q64b6w"/></g>`,
		"fallback": "iconaut:dice-d10-duotone",
	});
}

export default Component;
