import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0y2p2isn.css';
import '../../css/p/pr22v0bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0y2p2isn"/><path class="pr22v0bjn"/>`,
		"fallback": "circum:circle-chev-down",
	});
}

export default Component;
