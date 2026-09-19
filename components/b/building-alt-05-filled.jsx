import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2jmd4b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2jmd4b_y"/>`,
		"fallback": "griddy-icons:building-alt-05-filled",
	});
}

export default Component;
