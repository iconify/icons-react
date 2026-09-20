import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6fzbo6ig.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6fzbo6ig"/>`,
		"fallback": "pinhead:book-with-pawprint",
	});
}

export default Component;
