import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmb_wnbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmb_wnbzv"/>`,
		"fallback": "heroicons:chat-bubble-left",
	});
}

export default Component;
