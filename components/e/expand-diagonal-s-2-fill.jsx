import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yez6l33me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yez6l33me"/>`,
		"fallback": "ri:expand-diagonal-s-2-fill",
	});
}

export default Component;
