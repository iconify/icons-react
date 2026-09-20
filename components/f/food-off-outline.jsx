import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hraqcj8-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hraqcj8-k"/>`,
		"fallback": "mdi:food-off-outline",
	});
}

export default Component;
