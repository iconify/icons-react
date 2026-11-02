import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu76ixbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu76ixbkc"/>`,
		"fallback": "mingcute:cloud-2-line",
	});
}

export default Component;
