import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt4i538vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt4i538vr"/>`,
		"fallback": "mingcute:earth-3-fill",
	});
}

export default Component;
