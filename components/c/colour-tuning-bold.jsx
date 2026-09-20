import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl6d73b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tl6d73b_u"/>`,
		"fallback": "solar:colour-tuning-bold",
	});
}

export default Component;
