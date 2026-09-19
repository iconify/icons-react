import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9jz7db7e.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9jz7db7e"/>`,
		"fallback": "fa6-solid:compress",
	});
}

export default Component;
