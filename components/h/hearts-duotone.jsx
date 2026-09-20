import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2k606uky.css';
import '../../css/i/ioqeb7b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l2k606uky"/><path class="ioqeb7b7x"/></g>`,
		"fallback": "reicon:hearts-duotone",
	});
}

export default Component;
