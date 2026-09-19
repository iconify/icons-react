import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up69kityd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up69kityd"/>`,
		"fallback": "fa6-solid:flask",
	});
}

export default Component;
