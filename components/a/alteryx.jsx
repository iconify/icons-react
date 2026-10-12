import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aazs-57qz.css';

const viewBox = {"width":800,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aazs-57qz"/>`,
		"fallback": "thesvg-color:alteryx",
	});
}

export default Component;
