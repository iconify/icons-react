import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3o99tboa.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3o99tboa"/>`,
		"fallback": "dinkie-icons:gear",
	});
}

export default Component;
