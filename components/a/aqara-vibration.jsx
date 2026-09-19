import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/praux6byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="praux6byf"/>`,
		"fallback": "cbi:aqara-vibration",
	});
}

export default Component;
