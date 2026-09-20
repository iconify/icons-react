import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at882_b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at882_b2w"/>`,
		"fallback": "mdi:bus-articulated-front",
	});
}

export default Component;
