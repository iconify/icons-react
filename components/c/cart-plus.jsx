import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3jftogaf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3jftogaf"/>`,
		"fallback": "fa-solid:cart-plus",
	});
}

export default Component;
