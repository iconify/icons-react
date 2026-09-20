import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ctadqn52k.css';
import '../../css/x/x9ogi7jni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ctadqn52k"/><path clip-rule="evenodd" class="x9ogi7jni"/></g>`,
		"fallback": "solar:backspace-outline",
	});
}

export default Component;
