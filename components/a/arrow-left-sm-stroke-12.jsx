import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrtymebab.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrtymebab"/>`,
		"fallback": "garden:arrow-left-sm-stroke-12",
	});
}

export default Component;
