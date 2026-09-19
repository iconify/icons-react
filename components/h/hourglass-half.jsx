import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8yi72bsg.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8yi72bsg"/>`,
		"fallback": "fa6-solid:hourglass-half",
	});
}

export default Component;
