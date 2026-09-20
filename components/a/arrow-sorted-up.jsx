import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbrld-b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbrld-b7h"/>`,
		"fallback": "typcn:arrow-sorted-up",
	});
}

export default Component;
