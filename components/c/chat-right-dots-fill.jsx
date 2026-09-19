import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcl7fubcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcl7fubcu"/>`,
		"fallback": "bi:chat-right-dots-fill",
	});
}

export default Component;
