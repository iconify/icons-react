import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhm6svbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nhm6svbhf"/>`,
		"fallback": "mingcute:columns-3-fill",
	});
}

export default Component;
