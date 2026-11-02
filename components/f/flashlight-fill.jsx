import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk2b9t_sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk2b9t_sg"/>`,
		"fallback": "mingcute:flashlight-fill",
	});
}

export default Component;
