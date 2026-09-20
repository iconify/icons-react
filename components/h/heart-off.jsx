import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrjuz9bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrjuz9bsa"/>`,
		"fallback": "mdi-light:heart-off",
	});
}

export default Component;
