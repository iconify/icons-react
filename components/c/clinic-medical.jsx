import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eicqy9tnh.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eicqy9tnh"/>`,
		"fallback": "fa-solid:clinic-medical",
	});
}

export default Component;
