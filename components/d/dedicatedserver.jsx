import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk422ub4b.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk422ub4b"/>`,
		"fallback": "whh:dedicatedserver",
	});
}

export default Component;
