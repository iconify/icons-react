import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agkix7v6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agkix7v6e"/>`,
		"fallback": "mdi:home-export-outline",
	});
}

export default Component;
