import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn4rg314c.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn4rg314c"/>`,
		"fallback": "zmdi:cloud-circle",
	});
}

export default Component;
