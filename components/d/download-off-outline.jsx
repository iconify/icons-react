import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yifff4b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yifff4b_k"/>`,
		"fallback": "mdi:download-off-outline",
	});
}

export default Component;
