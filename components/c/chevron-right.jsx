import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf7qg7_ih.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf7qg7_ih"/>`,
		"fallback": "lineicons:chevron-right",
	});
}

export default Component;
