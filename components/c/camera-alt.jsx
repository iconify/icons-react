import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znb0yccba.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znb0yccba"/>`,
		"fallback": "zmdi:camera-alt",
	});
}

export default Component;
