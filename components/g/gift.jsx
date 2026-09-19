import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx_it6hge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx_it6hge"/>`,
		"fallback": "heroicons:gift",
	});
}

export default Component;
