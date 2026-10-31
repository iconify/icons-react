import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g84rt4bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g84rt4bta"/>`,
		"fallback": "coolicons:coupon-round",
	});
}

export default Component;
