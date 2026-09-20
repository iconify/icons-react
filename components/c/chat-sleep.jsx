import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l56c42bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l56c42bsr"/>`,
		"fallback": "mdi:chat-sleep",
	});
}

export default Component;
