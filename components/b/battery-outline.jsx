import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxb9-f_tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxb9-f_tp"/>`,
		"fallback": "eva:battery-outline",
	});
}

export default Component;
