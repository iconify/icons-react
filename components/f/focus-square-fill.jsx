import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpcs_f_wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpcs_f_wh"/>`,
		"fallback": "mingcute:focus-square-fill",
	});
}

export default Component;
