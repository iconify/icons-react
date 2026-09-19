import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw1a0h_9q.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw1a0h_9q"/>`,
		"fallback": "zmdi:border-bottom",
	});
}

export default Component;
