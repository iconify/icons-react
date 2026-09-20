import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er63n8b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er63n8b-v"/>`,
		"fallback": "mdi:alert-minus-outline",
	});
}

export default Component;
