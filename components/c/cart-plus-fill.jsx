import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhm26nblu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhm26nblu"/>`,
		"fallback": "bi:cart-plus-fill",
	});
}

export default Component;
