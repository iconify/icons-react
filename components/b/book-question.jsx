import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg8js6q3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg8js6q3e"/>`,
		"fallback": "noviair-light:book-question",
	});
}

export default Component;
