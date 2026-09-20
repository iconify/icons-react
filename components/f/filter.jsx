import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a44k6v4zh.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a44k6v4zh"/>`,
		"fallback": "iwwa:filter",
	});
}

export default Component;
