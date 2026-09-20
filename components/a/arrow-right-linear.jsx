import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlkjjmbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlkjjmbct"/>`,
		"fallback": "solar:arrow-right-linear",
	});
}

export default Component;
