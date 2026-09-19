import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7c6r5bnu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7c6r5bnu"/>`,
		"fallback": "heroicons:chat-bubble-bottom-center-text-16-solid",
	});
}

export default Component;
