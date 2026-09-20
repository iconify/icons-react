import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxy0f_iaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxy0f_iaq"/>`,
		"fallback": "mdi:fountain-pen",
	});
}

export default Component;
