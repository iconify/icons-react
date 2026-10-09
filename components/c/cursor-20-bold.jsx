import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp6yplxsk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp6yplxsk"/>`,
		"fallback": "energy-icons:cursor-20-bold",
	});
}

export default Component;
