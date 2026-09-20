import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfwkjt-vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfwkjt-vl"/>`,
		"fallback": "mdi:emoji-man-shimmer-outline",
	});
}

export default Component;
