import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnpzu0bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnpzu0bvh"/>`,
		"fallback": "mdi:ceiling-lamp-multiple-outline",
	});
}

export default Component;
