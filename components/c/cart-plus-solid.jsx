import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufp1axb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufp1axb1h"/>`,
		"fallback": "mynaui:cart-plus-solid",
	});
}

export default Component;
