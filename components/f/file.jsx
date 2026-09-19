import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2ew5t0wm.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2ew5t0wm"/>`,
		"fallback": "zmdi:file",
	});
}

export default Component;
