import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wscmxgl4z.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wscmxgl4z"/>`,
		"fallback": "fa6-solid:code-merge",
	});
}

export default Component;
