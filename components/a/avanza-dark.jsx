import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok0f7lvom.css';

const viewBox = {"width":1549,"height":1881};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok0f7lvom"/>`,
		"fallback": "thesvg-color:avanza-dark",
	});
}

export default Component;
