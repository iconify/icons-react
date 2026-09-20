import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wqqs5-rmi.css';
import '../../css/g/gigz97zic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wqqs5-rmi"/><path class="gigz97zic"/></g>`,
		"fallback": "streamline-sharp-color:chat-bubble-typing-oval-flat",
	});
}

export default Component;
