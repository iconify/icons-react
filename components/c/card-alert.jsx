import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln51mfiyk.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln51mfiyk"/>`,
		"fallback": "zmdi:card-alert",
	});
}

export default Component;
