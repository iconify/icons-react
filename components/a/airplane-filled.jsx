import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cru6c8bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cru6c8bpr"/>`,
		"fallback": "griddy-icons:airplane-filled",
	});
}

export default Component;
