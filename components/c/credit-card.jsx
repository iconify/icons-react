import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riu_o1bcx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riu_o1bcx"/>`,
		"fallback": "oi:credit-card",
	});
}

export default Component;
