import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvyhlw8lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvyhlw8lq"/>`,
		"fallback": "mdi:email-send",
	});
}

export default Component;
