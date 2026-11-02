import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcy18ybbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcy18ybbk"/>`,
		"fallback": "mingcute:heading-fill",
	});
}

export default Component;
