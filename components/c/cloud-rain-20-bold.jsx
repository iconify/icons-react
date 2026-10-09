import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqla65ydx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqla65ydx"/>`,
		"fallback": "energy-icons:cloud-rain-20-bold",
	});
}

export default Component;
