import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvw3pbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uxvw3pbar"/>`,
		"fallback": "lets-icons:chat-alt-2-fill",
	});
}

export default Component;
