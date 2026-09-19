import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzo1he64y.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzo1he64y"/>`,
		"fallback": "zmdi:airline-seat-legroom-normal",
	});
}

export default Component;
