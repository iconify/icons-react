import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5xoo-b6o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5xoo-b6o"/>`,
		"fallback": "garden:chevron-left-stroke-12",
	});
}

export default Component;
