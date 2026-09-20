import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvqeh1brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvqeh1brc"/>`,
		"fallback": "mdi:book-multiple-variant",
	});
}

export default Component;
