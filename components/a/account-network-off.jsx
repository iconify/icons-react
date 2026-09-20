import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dndr5xb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dndr5xb8b"/>`,
		"fallback": "mdi:account-network-off",
	});
}

export default Component;
