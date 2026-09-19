import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/ba8_ajblz.css';
import '../../css/u/u7kt-gdhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ba8_ajblz"/><path class="u7kt-gdhy"/></g>`,
		"fallback": "hugeicons:coupon-percent",
	});
}

export default Component;
