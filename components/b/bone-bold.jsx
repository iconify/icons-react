import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow3ha0cxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow3ha0cxj"/>`,
		"fallback": "solar:bone-bold",
	});
}

export default Component;
