import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oy65vhbqp.css';
import '../../css/q/qtm9kvyko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oy65vhbqp"/><path class="qtm9kvyko"/></g>`,
		"fallback": "streamline-color:chat-bubble-typing-oval-flat",
	});
}

export default Component;
