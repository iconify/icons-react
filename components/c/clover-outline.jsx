import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2-e3ebfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2-e3ebfc"/>`,
		"fallback": "mdi:clover-outline",
	});
}

export default Component;
