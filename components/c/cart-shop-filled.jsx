import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-yn6nltx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-yn6nltx"/>`,
		"fallback": "reicon:cart-shop-filled",
	});
}

export default Component;
