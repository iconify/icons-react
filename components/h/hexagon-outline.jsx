import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xljq6k5dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xljq6k5dp"/>`,
		"fallback": "mdi:hexagon-outline",
	});
}

export default Component;
