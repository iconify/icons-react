import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twmec-5-h.css';

const viewBox = {"width":408,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twmec-5-h"/>`,
		"fallback": "zmdi:airplanemode-inactive",
	});
}

export default Component;
