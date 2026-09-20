import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c47r4ib7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c47r4ib7c"/>`,
		"fallback": "mdi:account-arrow-up-outline",
	});
}

export default Component;
