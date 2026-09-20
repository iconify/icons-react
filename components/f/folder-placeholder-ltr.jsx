import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmm6urb8e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmm6urb8e"/>`,
		"fallback": "ooui:folder-placeholder-ltr",
	});
}

export default Component;
