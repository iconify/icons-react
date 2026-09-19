import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmmkl767k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmmkl767k"/>`,
		"fallback": "hugeicons:coupon-03",
	});
}

export default Component;
