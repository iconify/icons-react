import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp1655b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp1655b_g"/>`,
		"fallback": "mingcute:az-sort-descending-letters-fill",
	});
}

export default Component;
