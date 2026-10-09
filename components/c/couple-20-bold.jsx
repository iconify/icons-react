import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w17z9ibyf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w17z9ibyf"/>`,
		"fallback": "energy-icons:couple-20-bold",
	});
}

export default Component;
