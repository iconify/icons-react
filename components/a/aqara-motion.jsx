import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_9j5hebv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_9j5hebv"/>`,
		"fallback": "cbi:aqara-motion",
	});
}

export default Component;
