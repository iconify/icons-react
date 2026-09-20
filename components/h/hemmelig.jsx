import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5r_j7wyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5r_j7wyr"/>`,
		"fallback": "selfhst:hemmelig",
	});
}

export default Component;
