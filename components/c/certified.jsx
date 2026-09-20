import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e45jdkbgj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e45jdkbgj"/>`,
		"fallback": "picon:certified",
	});
}

export default Component;
