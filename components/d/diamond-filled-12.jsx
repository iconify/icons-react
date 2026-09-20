import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mojhw-3qz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mojhw-3qz"/>`,
		"fallback": "qlementine-icons:diamond-filled-12",
	});
}

export default Component;
