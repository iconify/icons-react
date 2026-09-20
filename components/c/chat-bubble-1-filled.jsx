import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuqpfgb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuqpfgb0c"/>`,
		"fallback": "tdesign:chat-bubble-1-filled",
	});
}

export default Component;
