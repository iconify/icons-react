import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo3ldvyho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo3ldvyho"/>`,
		"fallback": "solar:bones-bold",
	});
}

export default Component;
