import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-zw0hbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-zw0hbzx"/>`,
		"fallback": "mdi:credit-card-outline",
	});
}

export default Component;
