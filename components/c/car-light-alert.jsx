import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz8ajv6sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz8ajv6sy"/>`,
		"fallback": "mdi:car-light-alert",
	});
}

export default Component;
