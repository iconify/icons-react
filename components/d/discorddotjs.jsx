import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu_x_zbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu_x_zbgi"/>`,
		"fallback": "simple-icons:discorddotjs",
	});
}

export default Component;
