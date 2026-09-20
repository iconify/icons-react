import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw9-8sbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw9-8sbgm"/>`,
		"fallback": "typcn:flash-outline",
	});
}

export default Component;
