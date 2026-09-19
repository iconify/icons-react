import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg-0k0bga.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg-0k0bga"/>`,
		"fallback": "bi:chat-dots-fill",
	});
}

export default Component;
