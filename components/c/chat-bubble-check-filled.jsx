import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvq26cl9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvq26cl9y"/>`,
		"fallback": "griddy-icons:chat-bubble-check-filled",
	});
}

export default Component;
