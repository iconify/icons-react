import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x07oq7k1t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x07oq7k1t"/>`,
		"fallback": "energy-icons:bookmark-20-bold",
	});
}

export default Component;
