import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb3m5pbxa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb3m5pbxa"/>`,
		"fallback": "roentgen:foot",
	});
}

export default Component;
