import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zes8_9b5q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zes8_9b5q"/>`,
		"fallback": "foundation:first-aid",
	});
}

export default Component;
