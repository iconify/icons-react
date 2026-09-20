import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f70cc6byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f70cc6byw"/>`,
		"fallback": "mdi:file-refresh-outline",
	});
}

export default Component;
