import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fha4lnzyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fha4lnzyf"/>`,
		"fallback": "mdi:bunk-bed",
	});
}

export default Component;
