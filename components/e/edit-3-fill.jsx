import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpwzb9bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fpwzb9bqu"/>`,
		"fallback": "mingcute:edit-3-fill",
	});
}

export default Component;
