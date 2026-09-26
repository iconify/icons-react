import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npjkx-b_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npjkx-b_e"/>`,
		"fallback": "solar:bookmark-plus-bold",
	});
}

export default Component;
