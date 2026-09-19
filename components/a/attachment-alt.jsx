import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmi81oi2i.css';

const viewBox = {"width":240,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmi81oi2i"/>`,
		"fallback": "zmdi:attachment-alt",
	});
}

export default Component;
