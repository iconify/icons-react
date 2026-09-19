import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drzam248w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drzam248w"/>`,
		"fallback": "boxicons:headphone-mic-filled",
	});
}

export default Component;
