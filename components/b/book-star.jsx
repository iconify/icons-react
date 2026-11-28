import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdrt19kgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdrt19kgx"/>`,
		"fallback": "noviair-light:book-star",
	});
}

export default Component;
