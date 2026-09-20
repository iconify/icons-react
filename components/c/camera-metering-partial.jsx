import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5y7lob8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5y7lob8q"/>`,
		"fallback": "mdi:camera-metering-partial",
	});
}

export default Component;
