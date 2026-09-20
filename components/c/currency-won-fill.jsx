import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdxndzb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdxndzb-u"/>`,
		"fallback": "mingcute:currency-won-fill",
	});
}

export default Component;
