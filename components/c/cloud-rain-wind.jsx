import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wocan8bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wocan8bxj"/>`,
		"fallback": "hugeicons:cloud-rain-wind",
	});
}

export default Component;
