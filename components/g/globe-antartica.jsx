import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yev1t9yns.css';
import '../../css/z/zv4wep4nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yev1t9yns"/><path class="zv4wep4nj"/>`,
		"fallback": "boxicons:globe-antartica",
	});
}

export default Component;
