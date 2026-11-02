import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krrk9_xhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krrk9_xhf"/>`,
		"fallback": "mingcute:clock-1-fill",
	});
}

export default Component;
