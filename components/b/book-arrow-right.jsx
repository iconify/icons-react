import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tym262xzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tym262xzo"/>`,
		"fallback": "mdi:book-arrow-right",
	});
}

export default Component;
