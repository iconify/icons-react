import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx-xcdc4i.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx-xcdc4i"/>`,
		"fallback": "garden:book-closed-stroke-12",
	});
}

export default Component;
