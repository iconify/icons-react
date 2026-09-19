import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id5hbu2ge.css';

const viewBox = {"width":304,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id5hbu2ge"/>`,
		"fallback": "ps:bubble",
	});
}

export default Component;
