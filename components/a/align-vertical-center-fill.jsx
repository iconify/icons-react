import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwqzvac9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwqzvac9z"/>`,
		"fallback": "mingcute:align-vertical-center-fill",
	});
}

export default Component;
