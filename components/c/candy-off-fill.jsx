import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p08m16bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p08m16bwd"/>`,
		"fallback": "mingcute:candy-off-fill",
	});
}

export default Component;
