import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxjnpbb5e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxjnpbb5e"/>`,
		"fallback": "carbon:3d-curve-auto-vessels",
	});
}

export default Component;
