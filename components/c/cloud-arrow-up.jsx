import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7tq0rbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7tq0rbkt"/>`,
		"fallback": "noviair-light:cloud-arrow-up",
	});
}

export default Component;
