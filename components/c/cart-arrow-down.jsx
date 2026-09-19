import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvykp38uz.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvykp38uz"/>`,
		"fallback": "fa-solid:cart-arrow-down",
	});
}

export default Component;
