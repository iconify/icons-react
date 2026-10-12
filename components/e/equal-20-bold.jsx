import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmbmp5byl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmbmp5byl"/>`,
		"fallback": "energy-icons:equal-20-bold",
	});
}

export default Component;
