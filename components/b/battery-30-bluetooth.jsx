import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdz93i2eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdz93i2eu"/>`,
		"fallback": "mdi:battery-30-bluetooth",
	});
}

export default Component;
