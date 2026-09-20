import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlkqiu3ja.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlkqiu3ja"/>`,
		"fallback": "la:cubes",
	});
}

export default Component;
