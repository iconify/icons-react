import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy-badc1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy-badc1v"/>`,
		"fallback": "bx:bx-expand-horizontal",
	});
}

export default Component;
