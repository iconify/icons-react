import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev91xjb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev91xjb1s"/>`,
		"fallback": "heroicons-outline:chat-bubble-oval-left",
	});
}

export default Component;
