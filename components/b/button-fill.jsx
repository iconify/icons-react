import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up1nw_wyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up1nw_wyu"/>`,
		"fallback": "mingcute:button-fill",
	});
}

export default Component;
