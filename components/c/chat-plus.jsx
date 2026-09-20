import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tlk8kjjwg.css';
import '../../css/r/rjziirb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tlk8kjjwg"/><path clip-rule="evenodd" class="rjziirb7e"/></g>`,
		"fallback": "reicon:chat-plus",
	});
}

export default Component;
