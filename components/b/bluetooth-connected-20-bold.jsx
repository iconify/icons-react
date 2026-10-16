import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3-ldu6ly.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3-ldu6ly"/>`,
		"fallback": "energy-icons:bluetooth-connected-20-bold",
	});
}

export default Component;
