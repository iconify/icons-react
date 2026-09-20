import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8l3hzstz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8l3hzstz"/>`,
		"fallback": "lineicons:briefcase-alt",
	});
}

export default Component;
