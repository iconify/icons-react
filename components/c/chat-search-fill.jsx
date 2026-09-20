import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmpu4c7qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmpu4c7qp"/>`,
		"fallback": "ri:chat-search-fill",
	});
}

export default Component;
