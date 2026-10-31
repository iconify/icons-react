import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flw1gabej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flw1gabej"/>`,
		"fallback": "coolicons:battery-low-fill-round",
	});
}

export default Component;
