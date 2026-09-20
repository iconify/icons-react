import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3yi4ibis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3yi4ibis"/>`,
		"fallback": "mdi:credit-card-edit-outline",
	});
}

export default Component;
