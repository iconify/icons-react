import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k98if7bxz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k98if7bxz"/>`,
		"fallback": "pepicons-pencil:bookmark-filled",
	});
}

export default Component;
