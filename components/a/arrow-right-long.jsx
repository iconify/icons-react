import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woxg0sbem.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woxg0sbem"/>`,
		"fallback": "fa6-solid:arrow-right-long",
	});
}

export default Component;
