import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivz57db5z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivz57db5z"/>`,
		"fallback": "oi:cloudy",
	});
}

export default Component;
