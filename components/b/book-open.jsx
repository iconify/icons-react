import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuoeu1bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuoeu1bsz"/>`,
		"fallback": "griddy-icons:book-open",
	});
}

export default Component;
