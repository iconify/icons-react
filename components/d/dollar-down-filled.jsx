import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w4kscyb0w.css';
import '../../css/j/jt0f0ibza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w4kscyb0w"/><path clip-rule="evenodd" class="jt0f0ibza"/></g>`,
		"fallback": "reicon:dollar-down-filled",
	});
}

export default Component;
