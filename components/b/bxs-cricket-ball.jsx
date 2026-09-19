import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybps4ubau.css';
import '../../css/s/sh39ly0gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybps4ubau"/><path class="sh39ly0gc"/>`,
		"fallback": "bx:bxs-cricket-ball",
	});
}

export default Component;
