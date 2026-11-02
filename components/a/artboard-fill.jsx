import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzjz7ybat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzjz7ybat"/>`,
		"fallback": "mingcute:artboard-fill",
	});
}

export default Component;
