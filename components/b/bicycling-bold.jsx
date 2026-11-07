import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6gx6-b_c.css';
import '../../css/f/fbvycxxai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6gx6-b_c"/><path clip-rule="evenodd" class="fbvycxxai"/>`,
		"fallback": "solar:bicycling-bold",
	});
}

export default Component;
