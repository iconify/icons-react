import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt7sh2lev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt7sh2lev"/>`,
		"fallback": "mingcute:battery-charging-line",
	});
}

export default Component;
