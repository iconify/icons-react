import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bd6urnymg.css';
import '../../css/y/y7zeyjb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bd6urnymg"/><path class="y7zeyjb9g"/></g>`,
		"fallback": "lets-icons:chat-alt-2-duotone",
	});
}

export default Component;
