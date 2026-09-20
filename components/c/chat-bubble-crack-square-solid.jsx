import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkt4a4bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fkt4a4bbg"/>`,
		"fallback": "streamline-sharp:chat-bubble-crack-square-solid",
	});
}

export default Component;
