import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lked-oz3h.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lked-oz3h"/>`,
		"fallback": "medical-icon:i-medical-library",
	});
}

export default Component;
