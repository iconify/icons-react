import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9hum3b3t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9hum3b3t"/>`,
		"fallback": "la:cookie-bite-solid",
	});
}

export default Component;
