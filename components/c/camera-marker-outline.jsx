import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erckkwu7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erckkwu7o"/>`,
		"fallback": "mdi:camera-marker-outline",
	});
}

export default Component;
