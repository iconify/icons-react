import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wd6x7uwrd.css';
import '../../css/j/jhosi6gif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wd6x7uwrd"/><path class="jhosi6gif"/></g>`,
		"fallback": "solar:hanger-2-bold-duotone",
	});
}

export default Component;
