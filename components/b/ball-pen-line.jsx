import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl1x_9bzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl1x_9bzw"/>`,
		"fallback": "ri:ball-pen-line",
	});
}

export default Component;
