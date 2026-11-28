import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar8o1xhse.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar8o1xhse"/>`,
		"fallback": "pullo:border-right",
	});
}

export default Component;
