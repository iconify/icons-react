import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8x63lbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8x63lbay"/>`,
		"fallback": "mdi:cards-club-outline",
	});
}

export default Component;
