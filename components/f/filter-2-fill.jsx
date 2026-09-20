import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9g9lhbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f9g9lhbgf"/>`,
		"fallback": "mingcute:filter-2-fill",
	});
}

export default Component;
