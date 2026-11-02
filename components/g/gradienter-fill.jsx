import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up7bxb_fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up7bxb_fq"/>`,
		"fallback": "mingcute:gradienter-fill",
	});
}

export default Component;
