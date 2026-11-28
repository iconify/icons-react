import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psqsc1boi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psqsc1boi"/>`,
		"fallback": "pullo:chart-area-bold",
	});
}

export default Component;
