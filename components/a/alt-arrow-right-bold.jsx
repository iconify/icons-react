import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owh867xfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owh867xfj"/>`,
		"fallback": "solar:alt-arrow-right-bold",
	});
}

export default Component;
