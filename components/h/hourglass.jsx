import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb0i0kbdt.css';

const viewBox = {"width":256,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb0i0kbdt"/>`,
		"fallback": "zmdi:hourglass",
	});
}

export default Component;
