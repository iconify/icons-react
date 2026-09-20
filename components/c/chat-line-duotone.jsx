import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwfd39bzf.css';
import '../../css/h/hjh1-y5jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fwfd39bzf"/><path class="hjh1-y5jm"/></g>`,
		"fallback": "reicon:chat-line-duotone",
	});
}

export default Component;
