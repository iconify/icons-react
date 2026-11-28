import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/ww13ryb0s.css';
import '../../css/p/plg0i3bgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ww13ryb0s"/><path class="plg0i3bgu primary"/></g>`,
		"fallback": "iconaut:bridge-duotone",
	});
}

export default Component;
