import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmrbxm3qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmrbxm3qn"/>`,
		"fallback": "mdi:border-bottom-variant",
	});
}

export default Component;
