import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewd3j3yhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewd3j3yhw"/>`,
		"fallback": "mdi:chat-alert-outline",
	});
}

export default Component;
