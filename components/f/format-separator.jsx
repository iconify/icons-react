import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fy1uttbdv.css';
import '../../css/a/ag3cuubqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fy1uttbdv"/><path clip-rule="evenodd" class="ag3cuubqz"/></g>`,
		"fallback": "gg:format-separator",
	});
}

export default Component;
