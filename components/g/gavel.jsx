import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la1_-x6kr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la1_-x6kr"/>`,
		"fallback": "fa6-solid:gavel",
	});
}

export default Component;
