import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi4mg4ubu.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi4mg4ubu"/>`,
		"fallback": "zmdi:brush",
	});
}

export default Component;
