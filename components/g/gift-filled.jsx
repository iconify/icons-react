import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tot-1lbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tot-1lbvc"/>`,
		"fallback": "tabler:gift-filled",
	});
}

export default Component;
