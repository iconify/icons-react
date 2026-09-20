import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y98ul9c4y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y98ul9c4y"/>`,
		"fallback": "picon:branch",
	});
}

export default Component;
