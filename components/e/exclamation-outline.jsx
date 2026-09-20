import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv2g9obeh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv2g9obeh"/>`,
		"fallback": "zondicons:exclamation-outline",
	});
}

export default Component;
