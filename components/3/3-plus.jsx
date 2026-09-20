import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyzg1pb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyzg1pb_q"/>`,
		"fallback": "uil:3-plus",
	});
}

export default Component;
