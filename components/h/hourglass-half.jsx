import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl2tj90sh.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl2tj90sh"/>`,
		"fallback": "fa-solid:hourglass-half",
	});
}

export default Component;
