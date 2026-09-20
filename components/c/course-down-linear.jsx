import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq-rtilnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq-rtilnx"/>`,
		"fallback": "solar:course-down-linear",
	});
}

export default Component;
