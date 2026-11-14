import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu6vqt9py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu6vqt9py"/>`,
		"fallback": "hugeicons:bookmark-remove-01",
	});
}

export default Component;
