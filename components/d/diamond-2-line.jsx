import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxjrk3bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxjrk3bzo"/>`,
		"fallback": "mingcute:diamond-2-line",
	});
}

export default Component;
