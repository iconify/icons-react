import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xijb7ktck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xijb7ktck"/>`,
		"fallback": "mdi:gas-station-in-use",
	});
}

export default Component;
