import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e20m-7bqf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e20m-7bqf"/>`,
		"fallback": "picon:gps",
	});
}

export default Component;
