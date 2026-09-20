import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc5-3bbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc5-3bbpl"/>`,
		"fallback": "mdi:basket-check",
	});
}

export default Component;
