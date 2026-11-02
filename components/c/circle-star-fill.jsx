import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdo4z7ozv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdo4z7ozv"/>`,
		"fallback": "mingcute:circle-star-fill",
	});
}

export default Component;
