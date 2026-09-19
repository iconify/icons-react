import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux-9n-b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux-9n-b3s"/>`,
		"fallback": "boxicons:credit-card-insert-filled",
	});
}

export default Component;
