import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1-n18b8h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i1-n18b8h"/>`,
		"fallback": "streamline-flex:contact-book-remix",
	});
}

export default Component;
