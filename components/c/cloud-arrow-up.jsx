import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5lo8smcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5lo8smcr"/>`,
		"fallback": "heroicons-outline:cloud-arrow-up",
	});
}

export default Component;
