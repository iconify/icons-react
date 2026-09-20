import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfc93_bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfc93_bxb"/>`,
		"fallback": "mdi:brush",
	});
}

export default Component;
