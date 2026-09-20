import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp5_vtb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp5_vtb-e"/>`,
		"fallback": "mdi:cards-playing-heart-multiple",
	});
}

export default Component;
