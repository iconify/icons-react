import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzw_b9byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzw_b9byl"/>`,
		"fallback": "mingcute:chart-network-fill",
	});
}

export default Component;
