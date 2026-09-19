import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmjv_lbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmjv_lbfi"/>`,
		"fallback": "circum:grid-4-1",
	});
}

export default Component;
