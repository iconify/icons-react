import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noj3-fbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noj3-fbic"/>`,
		"fallback": "mdi:gear-box",
	});
}

export default Component;
