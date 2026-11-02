import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc1x0_-rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc1x0_-rt"/>`,
		"fallback": "mingcute:clubs-line",
	});
}

export default Component;
