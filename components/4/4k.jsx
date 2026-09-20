import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulq1iib-q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulq1iib-q"/>`,
		"fallback": "picon:4k",
	});
}

export default Component;
