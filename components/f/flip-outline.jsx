import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdo2_9rnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdo2_9rnt"/>`,
		"fallback": "eva:flip-outline",
	});
}

export default Component;
