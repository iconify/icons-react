import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs0dntbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs0dntbib"/>`,
		"fallback": "noviair-light:cart-arrow-down",
	});
}

export default Component;
