import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf7yw4f_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf7yw4f_k"/>`,
		"fallback": "mingcute:basketball-fill",
	});
}

export default Component;
