import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au5lyab1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au5lyab1z"/>`,
		"fallback": "mdi:arrow-bottom-right",
	});
}

export default Component;
