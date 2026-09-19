import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7u6qacet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7u6qacet"/>`,
		"fallback": "boxicons:contact-book-filled",
	});
}

export default Component;
