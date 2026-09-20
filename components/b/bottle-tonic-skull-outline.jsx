import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yha2iybap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yha2iybap"/>`,
		"fallback": "mdi:bottle-tonic-skull-outline",
	});
}

export default Component;
