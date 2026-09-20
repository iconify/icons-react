import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu1ar6dsa.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu1ar6dsa"/>`,
		"fallback": "picon:fandom",
	});
}

export default Component;
