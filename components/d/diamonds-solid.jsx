import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pf019pbvm.css';
import '../../css/a/a47x9rbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pf019pbvm"/><path class="a47x9rbwl"/></g>`,
		"fallback": "iconaut:diamonds-solid",
	});
}

export default Component;
