import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw0f72b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw0f72b8z"/>`,
		"fallback": "bx:bxs-check-circle",
	});
}

export default Component;
