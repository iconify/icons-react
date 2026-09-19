import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxt4qmc0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxt4qmc0n"/>`,
		"fallback": "eva:arrow-ios-upward-fill",
	});
}

export default Component;
