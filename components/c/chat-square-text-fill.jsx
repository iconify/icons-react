import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5e567fow.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5e567fow"/>`,
		"fallback": "bi:chat-square-text-fill",
	});
}

export default Component;
