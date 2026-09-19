import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7hv-mbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7hv-mbei"/>`,
		"fallback": "bx:bxl-windows",
	});
}

export default Component;
