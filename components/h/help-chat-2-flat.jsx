import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hzxqdgilv.css';
import '../../css/y/y-txehtrf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hzxqdgilv"/><path class="y-txehtrf"/></g>`,
		"fallback": "streamline-color:help-chat-2-flat",
	});
}

export default Component;
