import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqe1pt4jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqe1pt4jt"/>`,
		"fallback": "heroicons:chat-bubble-left-ellipsis",
	});
}

export default Component;
