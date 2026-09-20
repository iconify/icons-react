import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp6yibc6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp6yibc6o"/>`,
		"fallback": "uil:flip-h-alt",
	});
}

export default Component;
