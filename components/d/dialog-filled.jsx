import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/os248zhpk.css';
import '../../css/f/f2uyd7nwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="os248zhpk"/><path clip-rule="evenodd" class="f2uyd7nwg"/></g>`,
		"fallback": "reicon:dialog-filled",
	});
}

export default Component;
