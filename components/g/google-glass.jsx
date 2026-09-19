import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo1fhkblo.css';

const viewBox = {"width":416,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo1fhkblo"/>`,
		"fallback": "zmdi:google-glass",
	});
}

export default Component;
