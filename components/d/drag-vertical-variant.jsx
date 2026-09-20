import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvgox7b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvgox7b1s"/>`,
		"fallback": "mdi:drag-vertical-variant",
	});
}

export default Component;
