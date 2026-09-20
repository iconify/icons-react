import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2j9q7g2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2j9q7g2y"/>`,
		"fallback": "mingcute:danmaku-off-line",
	});
}

export default Component;
