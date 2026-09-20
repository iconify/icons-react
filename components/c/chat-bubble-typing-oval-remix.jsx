import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv-m53agm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hv-m53agm"/>`,
		"fallback": "streamline-flex:chat-bubble-typing-oval-remix",
	});
}

export default Component;
