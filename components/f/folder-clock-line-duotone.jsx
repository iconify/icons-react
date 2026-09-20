import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/w/wbisd9y_p.css';
import '../../css/u/ueb33fbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v21qiwb4s"/><circle class="wbisd9y_p"/><path class="ueb33fbqw"/></g>`,
		"fallback": "solar:folder-clock-line-duotone",
	});
}

export default Component;
