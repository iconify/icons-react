import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmubv-bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmubv-bvr"/>`,
		"fallback": "mdi:credit-card-contactless",
	});
}

export default Component;
