import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clg293vdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clg293vdc"/>`,
		"fallback": "cbi:aqara-gas-detector",
	});
}

export default Component;
