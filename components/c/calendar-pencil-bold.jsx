import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6dt8aclf.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6dt8aclf"/>`,
		"fallback": "pullo:calendar-pencil-bold",
	});
}

export default Component;
