import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wl7te64vu.css';
import '../../css/g/gs1o9u81c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wl7te64vu"/><path class="gs1o9u81c primary"/></g>`,
		"fallback": "iconaut:first-aid-duotone",
	});
}

export default Component;
