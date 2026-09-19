import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0s_9w4yb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0s_9w4yb"/>`,
		"fallback": "fa-solid:comment",
	});
}

export default Component;
