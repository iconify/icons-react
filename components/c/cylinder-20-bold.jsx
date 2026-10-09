import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvmjd2aub.css';
import '../../css/f/f6d284boh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvmjd2aub"/><path class="f6d284boh"/>`,
		"fallback": "energy-icons:cylinder-20-bold",
	});
}

export default Component;
