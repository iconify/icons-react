import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kma7s93do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kma7s93do"/>`,
		"fallback": "mdi:camera-metering-center",
	});
}

export default Component;
