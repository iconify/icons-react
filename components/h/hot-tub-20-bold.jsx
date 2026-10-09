import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxtlryb9c.css';
import '../../css/c/cc-mqixje.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxtlryb9c"/><path class="cc-mqixje"/>`,
		"fallback": "energy-icons:hot-tub-20-bold",
	});
}

export default Component;
