import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhwli594r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhwli594r"/>`,
		"fallback": "lineicons:cloud",
	});
}

export default Component;
