import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypi1vib0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypi1vib0k"/>`,
		"fallback": "mingcute:expand-player-line",
	});
}

export default Component;
