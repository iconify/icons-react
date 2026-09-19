import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r439nr-9c.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r439nr-9c"/>`,
		"fallback": "whh:birdhouse",
	});
}

export default Component;
