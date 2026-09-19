import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq5z-cv1s.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq5z-cv1s"/>`,
		"fallback": "zmdi:camera-switch",
	});
}

export default Component;
