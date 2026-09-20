import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wejbnw1yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wejbnw1yz"/>`,
		"fallback": "mdi:chili-alert-outline",
	});
}

export default Component;
