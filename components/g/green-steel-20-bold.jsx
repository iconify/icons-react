import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk0e34b5x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk0e34b5x"/>`,
		"fallback": "energy-icons:green-steel-20-bold",
	});
}

export default Component;
