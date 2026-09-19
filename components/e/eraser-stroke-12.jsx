import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxg8f6bqm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxg8f6bqm"/>`,
		"fallback": "garden:eraser-stroke-12",
	});
}

export default Component;
