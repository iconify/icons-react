import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sssfo6btx.css';
import '../../css/p/p4nrc_jlx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sssfo6btx"/><path class="p4nrc_jlx"/>`,
		"fallback": "energy-icons:coupon-20-bold",
	});
}

export default Component;
