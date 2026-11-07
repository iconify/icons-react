import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cx31vwdjv.css';
import '../../css/n/nhp7pxbla.css';
import '../../css/d/d0_r47ojw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cx31vwdjv"/><path class="nhp7pxbla"/><path class="d0_r47ojw"/></g>`,
		"fallback": "solar:chat-square-warning-line-duotone",
	});
}

export default Component;
