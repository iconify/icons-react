import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw5qx8bci.css';

const viewBox = {"width":2304,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw5qx8bci"/>`,
		"fallback": "fa:credit-card-alt",
	});
}

export default Component;
