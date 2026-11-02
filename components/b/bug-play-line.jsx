import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgk77_x6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgk77_x6e"/>`,
		"fallback": "mingcute:bug-play-line",
	});
}

export default Component;
