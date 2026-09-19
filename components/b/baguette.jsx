import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsm0-megr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsm0-megr"/>`,
		"fallback": "bxs:baguette",
	});
}

export default Component;
