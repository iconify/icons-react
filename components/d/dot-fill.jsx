import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khz5z_bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khz5z_bvx"/>`,
		"fallback": "mingcute:dot-fill",
	});
}

export default Component;
