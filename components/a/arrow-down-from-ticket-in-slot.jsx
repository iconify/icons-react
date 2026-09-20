import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnwtjmb7t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnwtjmb7t"/>`,
		"fallback": "pinhead:arrow-down-from-ticket-in-slot",
	});
}

export default Component;
