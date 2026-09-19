import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc61ku0nq.css';

const viewBox = {"width":256,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc61ku0nq"/>`,
		"fallback": "zmdi:hourglass-outline",
	});
}

export default Component;
