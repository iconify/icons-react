import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oor6lduvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oor6lduvn"/>`,
		"fallback": "griddy-icons:chat-bubble-check",
	});
}

export default Component;
