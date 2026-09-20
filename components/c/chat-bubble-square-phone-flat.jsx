import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2jyaobjs.css';
import '../../css/f/ffb2t9bro.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g2jyaobjs"/><path class="ffb2t9bro"/></g>`,
		"fallback": "streamline-flex-color:chat-bubble-square-phone-flat",
	});
}

export default Component;
