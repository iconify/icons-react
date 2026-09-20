import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e09-accts.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e09-accts"/>`,
		"fallback": "oi:folder",
	});
}

export default Component;
