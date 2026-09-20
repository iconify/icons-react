import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr_9c2bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr_9c2bvh"/>`,
		"fallback": "mdi:album",
	});
}

export default Component;
