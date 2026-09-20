import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa3u_sbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa3u_sbht"/>`,
		"fallback": "mdi:glass-fragile",
	});
}

export default Component;
