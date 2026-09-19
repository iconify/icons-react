import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i644t-bqn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i644t-bqn"/>`,
		"fallback": "whh:cupcake",
	});
}

export default Component;
