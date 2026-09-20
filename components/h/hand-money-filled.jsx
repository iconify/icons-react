import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtcdiibca.css';
import '../../css/p/p87szkrwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mtcdiibca"/><path clip-rule="evenodd" class="p87szkrwr"/></g>`,
		"fallback": "reicon:hand-money-filled",
	});
}

export default Component;
