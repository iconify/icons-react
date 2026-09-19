import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j31ltebnt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j31ltebnt"/>`,
		"fallback": "dashicons:arrow-right-alt2",
	});
}

export default Component;
