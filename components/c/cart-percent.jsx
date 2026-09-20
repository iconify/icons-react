import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mre13ubyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mre13ubyu"/>`,
		"fallback": "mdi:cart-percent",
	});
}

export default Component;
