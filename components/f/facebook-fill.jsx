import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ava2r5bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ava2r5bmk"/>`,
		"fallback": "mingcute:facebook-fill",
	});
}

export default Component;
