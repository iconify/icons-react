import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ia7_k4uev.css';
import '../../css/u/ud-p-1b6y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ia7_k4uev"/><path class="ud-p-1b6y"/></g>`,
		"fallback": "streamline-flex-color:chat-bubble-text-square-flat",
	});
}

export default Component;
