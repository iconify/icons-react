import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1m5bwbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1m5bwbkh"/>`,
		"fallback": "mynaui:bookmark-plus-solid",
	});
}

export default Component;
