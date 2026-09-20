import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjtg53bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjtg53bfr"/>`,
		"fallback": "typcn:arrow-down-thick",
	});
}

export default Component;
