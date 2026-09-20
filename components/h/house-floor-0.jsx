import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwfwz154d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwfwz154d"/>`,
		"fallback": "mdi:house-floor-0",
	});
}

export default Component;
