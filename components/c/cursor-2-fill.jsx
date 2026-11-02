import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg0z1z4jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg0z1z4jy"/>`,
		"fallback": "mingcute:cursor-2-fill",
	});
}

export default Component;
