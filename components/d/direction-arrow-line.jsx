import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvgx_ibgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvgx_ibgf"/>`,
		"fallback": "mingcute:direction-arrow-line",
	});
}

export default Component;
