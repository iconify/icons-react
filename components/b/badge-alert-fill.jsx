import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl8c9tblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl8c9tblm"/>`,
		"fallback": "mingcute:badge-alert-fill",
	});
}

export default Component;
