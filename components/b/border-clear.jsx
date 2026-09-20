import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl72n8d-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl72n8d-i"/>`,
		"fallback": "uis:border-clear",
	});
}

export default Component;
