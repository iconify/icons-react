import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5_3-pdgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5_3-pdgi"/>`,
		"fallback": "mdi:account-reactivate-outline",
	});
}

export default Component;
