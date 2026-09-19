import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od9c0scqe.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od9c0scqe"/>`,
		"fallback": "dinkie-icons:black-scissors",
	});
}

export default Component;
