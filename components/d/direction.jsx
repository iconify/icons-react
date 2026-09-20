import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9wl3ibck.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9wl3ibck"/>`,
		"fallback": "picon:direction",
	});
}

export default Component;
