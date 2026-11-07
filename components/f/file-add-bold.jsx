import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5z-yx4il.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e5z-yx4il"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-add-bold",
	});
}

export default Component;
