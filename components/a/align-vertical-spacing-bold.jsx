import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dug0-gykc.css';
import '../../css/f/fn7z18b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dug0-gykc"/><path class="fn7z18b2d"/></g>`,
		"fallback": "solar:align-vertical-spacing-bold",
	});
}

export default Component;
