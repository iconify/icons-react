import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj3_8nbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj3_8nbbr"/>`,
		"fallback": "ri:coupon-5-line",
	});
}

export default Component;
