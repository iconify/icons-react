import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aesor4b-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aesor4b-s"/>`,
		"fallback": "streamline:chat-bubble-square-question-solid",
	});
}

export default Component;
