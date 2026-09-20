import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h623n7bhi.css';

const viewBox = {"width":256,"height":167.509};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h623n7bhi"/>`,
		"fallback": "thesvg-color:fastify-dark",
	});
}

export default Component;
