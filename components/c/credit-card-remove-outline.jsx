import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aldc2_b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aldc2_b0g"/>`,
		"fallback": "mdi:credit-card-remove-outline",
	});
}

export default Component;
