import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfv4xyb3r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfv4xyb3r"/>`,
		"fallback": "lineicons:facebook-line",
	});
}

export default Component;
