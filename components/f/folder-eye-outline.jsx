import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdedo1bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdedo1bdk"/>`,
		"fallback": "mdi:folder-eye-outline",
	});
}

export default Component;
