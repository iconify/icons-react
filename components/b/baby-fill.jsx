import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqp7-xwht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqp7-xwht"/>`,
		"fallback": "mingcute:baby-fill",
	});
}

export default Component;
