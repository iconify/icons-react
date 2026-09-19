import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf--d4iuz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf--d4iuz"/>`,
		"fallback": "dashicons:image-rotate-right",
	});
}

export default Component;
