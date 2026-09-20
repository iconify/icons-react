import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrd_hrbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrd_hrbhz"/>`,
		"fallback": "mdi:account-box-minus-outline",
	});
}

export default Component;
