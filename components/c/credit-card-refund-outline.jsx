import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck2on000v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck2on000v"/>`,
		"fallback": "mdi:credit-card-refund-outline",
	});
}

export default Component;
