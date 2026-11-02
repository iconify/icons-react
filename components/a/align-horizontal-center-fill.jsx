import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk7vp6b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk7vp6b9v"/>`,
		"fallback": "mingcute:align-horizontal-center-fill",
	});
}

export default Component;
