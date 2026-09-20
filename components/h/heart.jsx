import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5zmk_xeo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5zmk_xeo"/>`,
		"fallback": "oi:heart",
	});
}

export default Component;
