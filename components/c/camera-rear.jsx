import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkvh0lmav.css';

const viewBox = {"width":304,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkvh0lmav"/>`,
		"fallback": "zmdi:camera-rear",
	});
}

export default Component;
