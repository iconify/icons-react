import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-5xk6bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-5xk6bmx"/>`,
		"fallback": "coolicons:circle-medium-bulk-round",
	});
}

export default Component;
