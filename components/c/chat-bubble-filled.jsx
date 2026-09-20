import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyvx9w.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyvx9w"/>`,
		"fallback": "line-md:chat-bubble-filled",
	});
}

export default Component;
