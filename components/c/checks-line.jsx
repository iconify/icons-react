import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdl857bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdl857bfq"/>`,
		"fallback": "mingcute:checks-line",
	});
}

export default Component;
