import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vksi9_b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vksi9_b9v"/>`,
		"fallback": "mdi:arrow-left-bold-box-outline",
	});
}

export default Component;
