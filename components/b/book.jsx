import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0a4mhdhi.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0a4mhdhi"/>`,
		"fallback": "zmdi:book",
	});
}

export default Component;
