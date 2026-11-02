import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzp36sxgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzp36sxgm"/>`,
		"fallback": "mingcute:battery-4-fill",
	});
}

export default Component;
