import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa33cw15g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa33cw15g"/>`,
		"fallback": "pinhead:book-with-pencil-and-apple",
	});
}

export default Component;
