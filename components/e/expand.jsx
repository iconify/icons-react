import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3zqhx3gb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3zqhx3gb"/>`,
		"fallback": "la:expand",
	});
}

export default Component;
