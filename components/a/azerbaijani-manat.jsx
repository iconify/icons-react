import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzqnatv9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzqnatv9o"/>`,
		"fallback": "lucide:azerbaijani-manat",
	});
}

export default Component;
