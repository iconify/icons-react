import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f6nks81bz.css';
import '../../css/n/nmrz99bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f6nks81bz"/><path clip-rule="evenodd" class="nmrz99bgl"/></g>`,
		"fallback": "griddy-icons:chicken",
	});
}

export default Component;
