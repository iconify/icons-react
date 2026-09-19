import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf9sv6wma.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf9sv6wma"/>`,
		"fallback": "whh:elgg",
	});
}

export default Component;
