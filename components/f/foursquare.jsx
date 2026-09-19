import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz0j6tbqr.css';

const viewBox = {"width":1024,"height":961};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz0j6tbqr"/>`,
		"fallback": "whh:foursquare",
	});
}

export default Component;
