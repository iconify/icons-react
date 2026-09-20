import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yovfahbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yovfahbcm"/>`,
		"fallback": "mdi:flask-plus-outline",
	});
}

export default Component;
