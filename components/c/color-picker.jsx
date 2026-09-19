import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_l78dbfi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_l78dbfi"/>`,
		"fallback": "carbon:color-picker",
	});
}

export default Component;
