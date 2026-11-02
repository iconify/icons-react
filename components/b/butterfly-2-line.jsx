import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f49brcb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f49brcb9u"/>`,
		"fallback": "mingcute:butterfly-2-line",
	});
}

export default Component;
