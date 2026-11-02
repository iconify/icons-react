import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzv1a3tvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzv1a3tvp"/>`,
		"fallback": "mingcute:broccoli-fill",
	});
}

export default Component;
