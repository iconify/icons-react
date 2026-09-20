import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g7e9a0b9g.css';
import '../../css/d/d2-wtbbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g7e9a0b9g"/><path class="d2-wtbbag"/></g>`,
		"fallback": "solar:atom-linear",
	});
}

export default Component;
