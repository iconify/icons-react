import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ezlbh2tvv.css';
import '../../css/o/ovrr7cgml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ezlbh2tvv"/><path class="ovrr7cgml"/></g>`,
		"fallback": "solar:book-bookmark-bold",
	});
}

export default Component;
