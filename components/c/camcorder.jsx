import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb82w-bfm.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb82w-bfm"/>`,
		"fallback": "whh:camcorder",
	});
}

export default Component;
