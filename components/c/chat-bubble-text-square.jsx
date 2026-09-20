import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3oek9bzm.css';
import '../../css/j/jz1uzac_s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3oek9bzm"/><path class="jz1uzac_s"/></g>`,
		"fallback": "streamline-flex-color:chat-bubble-text-square",
	});
}

export default Component;
