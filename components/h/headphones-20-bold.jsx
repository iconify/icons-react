import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_w8mhbqv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_w8mhbqv"/>`,
		"fallback": "energy-icons:headphones-20-bold",
	});
}

export default Component;
