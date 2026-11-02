import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wld98je9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wld98je9e"/>`,
		"fallback": "mingcute:folder-warning-fill",
	});
}

export default Component;
