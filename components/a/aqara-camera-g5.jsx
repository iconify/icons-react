import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6x9rgtoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6x9rgtoz"/>`,
		"fallback": "cbi:aqara-camera-g5",
	});
}

export default Component;
