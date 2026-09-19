import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju1-0mb4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju1-0mb4z"/>`,
		"fallback": "fa6-solid:code-pull-request",
	});
}

export default Component;
