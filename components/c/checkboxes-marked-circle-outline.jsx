import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqfrspb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqfrspb0x"/>`,
		"fallback": "mdi:checkboxes-marked-circle-outline",
	});
}

export default Component;
