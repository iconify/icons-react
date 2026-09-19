import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w856n9bxz.css';

const viewBox = {"width":1408,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w856n9bxz"/>`,
		"fallback": "fa:bold",
	});
}

export default Component;
