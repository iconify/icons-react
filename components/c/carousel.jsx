import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw6_xbb1x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw6_xbb1x"/>`,
		"fallback": "system-uicons:carousel",
	});
}

export default Component;
