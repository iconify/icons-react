import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt-98jkjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt-98jkjc"/>`,
		"fallback": "mingcute:cctv-off-line",
	});
}

export default Component;
