import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti01b-i2m.css';
import '../../css/y/yyjf3gxzh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti01b-i2m"/><path class="yyjf3gxzh"/>`,
		"fallback": "energy-icons:charge-point-sign-20-bold",
	});
}

export default Component;
