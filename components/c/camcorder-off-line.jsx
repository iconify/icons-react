import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcr61ybai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcr61ybai"/>`,
		"fallback": "mingcute:camcorder-off-line",
	});
}

export default Component;
