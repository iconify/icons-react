import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0ovpsbko.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0ovpsbko"/>`,
		"fallback": "memory:arrow-up-circle",
	});
}

export default Component;
