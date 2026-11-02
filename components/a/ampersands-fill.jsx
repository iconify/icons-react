import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv78f6y5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv78f6y5x"/>`,
		"fallback": "mingcute:ampersands-fill",
	});
}

export default Component;
