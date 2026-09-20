import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu8jyibot.css';
import '../../css/f/fa7sd-bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu8jyibot"/><path class="fa7sd-bvi"/>`,
		"fallback": "mingcute:butterfly-2-line",
	});
}

export default Component;
