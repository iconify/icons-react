import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs2qo9b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs2qo9b4s"/>`,
		"fallback": "mdi:folder-warning-outline",
	});
}

export default Component;
