import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj58izluq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj58izluq"/>`,
		"fallback": "noviair:disc-play",
	});
}

export default Component;
