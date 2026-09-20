import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/l/l82s98b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v21qiwb4s"/><path class="l82s98b7p"/></g>`,
		"fallback": "solar:folder-code-linear",
	});
}

export default Component;
