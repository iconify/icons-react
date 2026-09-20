import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj7wg2bbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj7wg2bbf"/>`,
		"fallback": "selfhst:instagram-reels-dark",
	});
}

export default Component;
