import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt2gwzbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt2gwzbgo"/>`,
		"fallback": "bx:bxs-purchase-tag",
	});
}

export default Component;
