import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lih5fib8b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lih5fib8b"/>`,
		"fallback": "pinhead:book-with-bookmark-in-slot",
	});
}

export default Component;
