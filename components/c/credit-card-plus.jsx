import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7njqtjge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7njqtjge"/>`,
		"fallback": "keyline-icons:credit-card-plus",
	});
}

export default Component;
