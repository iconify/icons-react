import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2uyd7nwg.css';
import '../../css/r/rv177xb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f2uyd7nwg"/><path class="rv177xb7k"/></g>`,
		"fallback": "reicon:dialog-duotone",
	});
}

export default Component;
