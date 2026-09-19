import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv5t7cb2y.css';

const viewBox = {"width":512,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv5t7cb2y"/>`,
		"fallback": "ps:dashboard",
	});
}

export default Component;
