import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv5slx5dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv5slx5dp"/>`,
		"fallback": "solar:align-horizontal-center-bold",
	});
}

export default Component;
