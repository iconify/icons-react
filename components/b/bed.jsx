import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqe3w8god.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqe3w8god"/>`,
		"fallback": "whh:bed",
	});
}

export default Component;
