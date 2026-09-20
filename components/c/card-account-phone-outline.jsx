import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb9u09bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb9u09bsu"/>`,
		"fallback": "mdi:card-account-phone-outline",
	});
}

export default Component;
