import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vpd0g_bma.css';
import '../../css/c/c7-qgdbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vpd0g_bma"/><path class="c7-qgdbst"/></g>`,
		"fallback": "withicons-retro:dollar-sign",
	});
}

export default Component;
