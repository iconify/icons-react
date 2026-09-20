import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpn85rnck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpn85rnck"/>`,
		"fallback": "mdi:emoji-robot-off",
	});
}

export default Component;
