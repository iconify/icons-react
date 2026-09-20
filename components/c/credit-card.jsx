import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxz7a4jmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxz7a4jmm"/>`,
		"fallback": "mi:credit-card",
	});
}

export default Component;
