import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9-ad9g8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9-ad9g8u"/>`,
		"fallback": "typcn:arrow-sorted-down",
	});
}

export default Component;
