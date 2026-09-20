import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulg-h6bzb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulg-h6bzb"/>`,
		"fallback": "roentgen:human-on-ferry",
	});
}

export default Component;
