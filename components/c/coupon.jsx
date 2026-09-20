import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2kgl9bwh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2kgl9bwh"/>`,
		"fallback": "picon:coupon",
	});
}

export default Component;
