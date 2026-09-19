import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-2gqjb5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-2gqjb5z"/>`,
		"fallback": "fa6-solid:binoculars",
	});
}

export default Component;
