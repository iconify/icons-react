import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldqkz7rds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldqkz7rds"/>`,
		"fallback": "mdi:credit-card-settings",
	});
}

export default Component;
