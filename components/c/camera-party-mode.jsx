import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxgnpab1l.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxgnpab1l"/>`,
		"fallback": "zmdi:camera-party-mode",
	});
}

export default Component;
