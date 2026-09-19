import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8r0h-bad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8r0h-bad"/>`,
		"fallback": "fa6-solid:heart",
	});
}

export default Component;
