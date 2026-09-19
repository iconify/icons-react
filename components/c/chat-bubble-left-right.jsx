import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pagw__b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pagw__b7y"/>`,
		"fallback": "heroicons-outline:chat-bubble-left-right",
	});
}

export default Component;
