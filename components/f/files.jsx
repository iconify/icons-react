import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmb9pi-5h.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmb9pi-5h"/>`,
		"fallback": "lineicons:files",
	});
}

export default Component;
