import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cvvmwhbno.css';
import '../../css/j/juy9_tn9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cvvmwhbno"/><path clip-rule="evenodd" class="juy9_tn9q"/></g>`,
		"fallback": "reicon:chat-square-arrow-filled",
	});
}

export default Component;
