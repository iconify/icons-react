import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0yfdjz0b.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0yfdjz0b"/>`,
		"fallback": "zmdi:flickr",
	});
}

export default Component;
