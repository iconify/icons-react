import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv1_o64lj.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv1_o64lj"/>`,
		"fallback": "whh:foursquarealt",
	});
}

export default Component;
