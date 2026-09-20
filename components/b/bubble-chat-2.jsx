import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pittov07q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pittov07q"/>`,
		"fallback": "streamline-cyber:bubble-chat-2",
	});
}

export default Component;
