import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfnkfhbcd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfnkfhbcd"/>`,
		"fallback": "fa-solid:closed-captioning",
	});
}

export default Component;
