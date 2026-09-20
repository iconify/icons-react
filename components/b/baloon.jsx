import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu_ys67gk.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu_ys67gk"/>`,
		"fallback": "lineicons:baloon",
	});
}

export default Component;
