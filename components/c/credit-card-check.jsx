import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsvbm6bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsvbm6bbm"/>`,
		"fallback": "keyline-icons:credit-card-check",
	});
}

export default Component;
