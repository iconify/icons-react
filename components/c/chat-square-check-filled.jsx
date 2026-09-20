import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arjspos7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="arjspos7x"/>`,
		"fallback": "reicon:chat-square-check-filled",
	});
}

export default Component;
