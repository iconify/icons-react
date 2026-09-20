import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6x6wlb1v.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6x6wlb1v"/>`,
		"fallback": "lineicons:arrow-top-right",
	});
}

export default Component;
