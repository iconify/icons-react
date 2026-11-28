import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayv_5ub6b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayv_5ub6b"/>`,
		"fallback": "pullo:calendar-pencil-fill",
	});
}

export default Component;
