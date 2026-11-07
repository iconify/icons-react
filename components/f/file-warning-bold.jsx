import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iewt-_b0c.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iewt-_b0c"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-warning-bold",
	});
}

export default Component;
