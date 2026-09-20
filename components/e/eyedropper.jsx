import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv29y0z8r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv29y0z8r"/>`,
		"fallback": "oi:eyedropper",
	});
}

export default Component;
