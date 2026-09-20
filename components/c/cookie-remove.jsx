import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngrmegber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngrmegber"/>`,
		"fallback": "mdi:cookie-remove",
	});
}

export default Component;
