import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt6qkccya.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt6qkccya"/>`,
		"fallback": "fa6-solid:cart-shopping",
	});
}

export default Component;
