import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo_m8-b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo_m8-b_o"/>`,
		"fallback": "mdi-light:chart-pie",
	});
}

export default Component;
