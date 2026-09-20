import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t37u2kbrr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t37u2kbrr"/>`,
		"fallback": "pinhead:arrow-up-to-envelope-in-slot",
	});
}

export default Component;
