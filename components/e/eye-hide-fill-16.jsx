import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meymu9b3o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meymu9b3o"/>`,
		"fallback": "garden:eye-hide-fill-16",
	});
}

export default Component;
