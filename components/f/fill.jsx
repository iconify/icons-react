import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drqu0h0xn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drqu0h0xn"/>`,
		"fallback": "fa6-solid:fill",
	});
}

export default Component;
