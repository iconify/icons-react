import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/splndebxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="splndebxl"/>`,
		"fallback": "heroicons-outline:hand-thumb-up",
	});
}

export default Component;
