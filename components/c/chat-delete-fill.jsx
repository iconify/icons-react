import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvpz8ohbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvpz8ohbq"/>`,
		"fallback": "ri:chat-delete-fill",
	});
}

export default Component;
